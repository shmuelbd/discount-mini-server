const express = require('express')
const app = express()
const https = require('https');

const portHttps = 3000
const portHttp = 3001
require('dotenv').config()
const fs = require('fs');
app.use(express.json());

const privateKey = fs.readFileSync('certificate/cert/key.pem', 'utf8');
const certificate = fs.readFileSync('certificate/cert/cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);


const { initial_router } = require("./routes/initial_router")

initial_router(app)


httpsServer.listen(portHttps, () => {
    console.log(`https listening on port ${portHttps}`)
});


app.listen(portHttp, () => {
    console.log(`http listening on port ${portHttp}`)
})