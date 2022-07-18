const fs = require('fs');
const Ajv = require("ajv")

const customerSchema = require("./schema.json")
module.exports = {
    createNewCustomer: async (req, res, next) => {
        const data = req.body;

        //Read data from DB file
        let readDB = await fs.readFileSync("./db.json", 'utf8')

        //Parse data
        readDB = JSON.parse(readDB)
        //Checking data according to the scheme 
        const ajv = new Ajv({ allErrors: true });
        const vaildData = ajv.validate(customerSchema, data);

        if (vaildData) {
            //Checking if user exsist 
            const checkUserExist = readDB.filter(customer => customer.customerID === data[0].customerID)
            if (checkUserExist.length > 0)
                return res.status(500).json({ message: "customer exist" })
            //Merge information on existing information
            readDB = readDB.concat(data)

            //Saving the data in the DB file
            fs.writeFile("./db.json", JSON.stringify(readDB), (err) => {
                if (err)
                    res.status(500).json(err)
                res.status(200).json({ message: "customer created", token: req.headers['authorization'] })
            })
        }
        else
            res.status(500).json(ajv.errorsText(vaildData.errors))
    }
};