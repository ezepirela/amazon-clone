const stripe = require('stripe')('sk_test_51IQkB1Fsyfu7OQPB72ZyeUnL9qvY8H2z7AxR1WZopMBsbSJC7y6TNmLO9KQtEsUlnyHmIFwibVtPPTHO5rf8TzUS00raKG00oU')
// const Order = require('../models/order');
const controller = {
	getData : async (req, res, next) => {
	    const total = req.query.total;
	    console.log(`payment received for the amount ${total}`);
	    const paymentIntent = await stripe.paymentIntents.create({
	        amount: total,
	        currency: 'usd'
	    }); 
	    res.status(201).send({ 
	        clientSecret: paymentIntent.client_secret
	    })
	},
	// sendDataToDB : async (req, res, next) => {
	// 	const {amount, created, basket, user} = req.body.data;
	// 	const newOrder = new Order({
	// 		amount,
	// 		created,
	// 		basket, 
	// 		user
	// 	})
	// }
};
module.exports = controller;