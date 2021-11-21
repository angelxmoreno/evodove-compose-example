require('dotenv').config()
const {EvodoveClient} = require('evodove');
const express = require('express');
const app = express();
const port = process.env.WEB_PORT


const clientOptions = {
    host: process.env.EVODOVE_SERVER_HOST,
    port: process.env.EVODOVE_SERVER_PORT,
    secureKey: process.env.EVODOVE_SECURE_KEY,
    reconnectInterval: 1000,
    doReconnectOnClose: true,
    requestTimeout: 10000
};

evodoveClient = new EvodoveClient(clientOptions);


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/test1', async(req, res) => {
    await evodoveClient.publish('hello', {name: 'world'})
    res.send('sent')
});

const start = async () => {
    await evodoveClient.connect()
    console.log(`web: Evo connection established`)
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
}

start().catch(console.error)
