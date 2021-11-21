const { Evodove } = require('evodove');

const evodove = new Evodove();
console.info('Starting Evodove with options', {
    host: process.env.EVODOVE_SERVER_HOST,
    port: process.env.EVODOVE_SERVER_PORT,
    secureKey: process.env.EVODOVE_SECURE_KEY,
});
evodove.start();
