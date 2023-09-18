const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
});

const Message = mongoose.model('Message', messageSchema);

// Export the model
module.exports = Message;

