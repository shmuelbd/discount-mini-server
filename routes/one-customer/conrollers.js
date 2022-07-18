const fs = require('fs');

module.exports = {
    getOneCustomer: async (req, res, next) => {
        const userId = req.params.id
        fs.readFile("./db.json", "utf-8", (err, response) => {
            if (err) {
                return res.status(500).json(err)
            }
            response = JSON.parse(response);
            const user = response.filter(user => user.customerID === userId)
            res.status(200).json({ user, token: req.headers['authorization'] })
        })
    }
};