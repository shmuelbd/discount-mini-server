var jwt = require('jsonwebtoken');

module.exports = {

    signin: async (req, res, next) => {
        const userId = req.params.id
        const token = jwt.sign({
            data: userId
        }, process.env.JWT, { expiresIn: '5m' });

        res.status(200).json({ message: token })

    },

    validToken: async (req, res, next) => {
        let userId;
        if (!req.headers['authorization'])
            return res.sendStatus(403)

        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.JWT, (err, decoded) => {
            if (err)
                return res.status(401).json({ success: false, message: "Failed to authenticate token" });
            else {
                userId = decoded.data
                const newToken = jwt.sign({
                    data: userId
                }, process.env.JWT, { expiresIn: '5m' });
                req.headers['authorization'] = `Bearer ${newToken}`
                next()
            }
        })
    }
};