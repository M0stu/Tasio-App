const user = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postRegister = async (req, res) => {
    try{
        const {username, email, password} = req.body;

        // Check if user exists
        const userExists = await user.exists({email: email.toLowerCase()});

        if (userExists){
            return res.status(409).send('E-mail Already in use.')
        }

        //Password Hashing function
        const encryptedPassword = await bcrypt.hash(password,10);

        // Create USER and SAVE it to database
        const USER = await user.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        // Create JWT Token
        const token = jwt.sign(
            {
            userId: USER._id,
            email
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: '6h',
            }

        
        );

        res.status(201).json({
            userDetails: {
                email: USER.email,
                token: token,
                username: USER.username,
                _id: USER._id,
            }
        });

    }catch(err){
        return res.status(500).send('Error occured. Please try again');

    }
};

module.exports = postRegister;