const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//Required files
const socketServer = require('./socketServer');
const authRoutes = require('./routes/authRoutes');
const friendInvitationRoutes = require('./routes/friendInvitationRoutes');


const PORT = process.env.PORT || process.env.API_PORT;

const APP = express();
APP.use(express.json());
APP.use(cors());

//Register the routes
APP.use('/api/auth', authRoutes);

//Friend Invitation
APP.use('/api/friend-invitation', friendInvitationRoutes);



console.log('Starting Server');

const server = http.createServer(APP);
socketServer.registerSocketServer(server);

// server.listen(PORT, () => {
//     console.log('Server is listening on ' + PORT);
// });

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    server.listen(PORT, () => {
        console.log('Server is listening on ' + PORT);
    });

}).catch(err => {
    console.log('Database Connection Failed. Server not started')
    console.log(err)
})