const fs = require('fs');

module.exports = {
    deleteOneCustomer: async (req, res, next) => {
        const userId = req.params.id
        fs.readFile("./db.json", "utf-8", (err, response) => {
            if (err) {
                return res.status(500).json(err)
            }
            response = JSON.parse(response);
            const user = response.filter(user => user.customerID != userId)
            fs.writeFile("./db.json", JSON.stringify(user), (err) => {
                if (err)
                    res.status(500).json(err)
                res.status(200).json({ message: "customer deleted", token: req.headers['authorization'] })
            })
        })
    }
};