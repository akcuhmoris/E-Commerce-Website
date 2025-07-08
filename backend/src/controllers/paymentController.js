const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = async(req, res) => {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // cents
        currency,
    });

    res.json({
        clientSecret: paymentIntent.client_secret,
    });
};