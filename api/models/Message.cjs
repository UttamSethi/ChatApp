const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema(
    {
        sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User',required:true},
        recipient: {type: mongoose.Schema.Types.ObjectId, ref: 'User',required:true},
        text: String,
        file: String,
    }, {timestamps:true});

const MessageModel= mongoose.model('Message', MessageSchema);
module.exports = MessageModel;

