const fs = require('fs');

module.exports = {
    updateCustomer: async (req, res, next) => {
        const userId = req.params.id
        const scope = req.params.scope
        const status = req.params.status

        //Read data from DB file
        let readDB = await fs.readFileSync("./db.json", 'utf8')

        //Parse data
        readDB = JSON.parse(readDB)

        let customer = readDB.find(item => item.customerID === userId);
        let changescope = customer.accountPermissions.find(item => item.scope === scope);

        if (changescope)
            changescope.accountStatus = status
        fs.writeFile("./db.json", JSON.stringify(readDB), (err) => {
            if (err)
                res.status(500).json(err)
            res.status(200).json({ message: "customer updeted", token: req.headers['authorization'] })
        })
    }
};