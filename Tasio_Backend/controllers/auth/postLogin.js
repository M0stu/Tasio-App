const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email.toLowerCase()});
        if(user && (await bcrypt.compare(password, user.password))){
            //Send New Token
            const token = jwt.sign(
                {
                userId: user._id,
                email
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '6h',
                } 
           );

            return res.status(200).json({
                userDetails: {
                    email: user.email,
                    token: token,
                    username: user.username,
                    _id: user._id
                }
            })
        }

        return res.status(400).send('Invalid Credentials. Please Try again');

    }catch(err){
        return res.status(500).send('Something went wrong ! Please try again.');

    }
};

module.exports = postLogin;