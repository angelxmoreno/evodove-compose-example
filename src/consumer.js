require('dotenv').config()
const {EvodoveClient} = require('evodove');


const clientOptions = {
    host: process.env.EVODOVE_SERVER_HOST,
    port: process.env.EVODOVE_SERVER_PORT,
    secureKey: process.env.EVODOVE_SECURE_KEY,
    reconnectInterval: 1000,
    doReconnectOnClose: true,
    requestTimeout: 10000
};

evodoveClient = new EvodoveClient(clientOptions);

(async () => {
    await evodoveClient.connect()
    console.log(`consumer: Evo connection established`)
    await evodoveClient.subscribe('hello', (params) => {
        console.log(`Hello `, params)
    })
})()
