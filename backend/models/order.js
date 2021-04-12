const mongoose = require('mongoose');
const Schema    =   mongoose.Schema;

const orderSchema = new Schema({
    amount: {type: String},
    basket: Schema.Types.Mixed,
    created: {type: Date},
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order