const subscribeService = require('../services/subscribe');

// Add email to subscribers list
exports.addSubscriber = async (req, res) => {
    try {
        if(!req.body.email) throw new Error("Email not defined");
        const result = await subscribeService.addSubscriber(req.body.email);
        res.status(200).send({ message: 'User added to subscriber list.', data: result });
    } catch (e) {
        res.status(401).send({ message: e.toString() });
    }
}