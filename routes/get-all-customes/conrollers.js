const fs = require('fs');

module.exports = {
    getAllCustomers: async (req, res, next) => {
        fs.readFile("./db.json", "utf-8", (err, response) => {
            if (err) {
                return res.status(500).json(err)
            }
            response = JSON.parse(response)
            res.status(200).json({ response, token: req.headers['authorization'] })
        })
    }
};