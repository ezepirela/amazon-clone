const mongoose = require('mongoose');
const Schema    =   mongoose.Schema;

const userSchema = new Schema({
    userId: Schema.Types.ObjectId,
    email: {type: String},
    orders: [{
        type: mongoose.Types.ObjectId,
        ref: 'Order'
    }]
});
const User = mongoose.model('User', userSchema);
module.exports = User;