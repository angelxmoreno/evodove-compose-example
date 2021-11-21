const {EvodoveClient} = require('evodove');

const clientOptions = {
    host: process.env.EVODOVE_SERVER_HOST,
    port: process.env.EVODOVE_SERVER_PORT,
    secureKey: process.env.EVODOVE_SECURE_KEY,
    reconnectInterval: 1000,
    doReconnectOnClose: true,
    requestTimeout: 5000
};

module.exports = new EvodoveClient(clientOptions);
