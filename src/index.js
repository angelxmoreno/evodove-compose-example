require('dotenv').config()
const express = require('express')
const evodoveClient = require('./evodove-client')
const app = express()
const port = process.env.WEB_PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

evodoveClient.connect().then(evoConn => {
    console.log(`Evo connection established`)

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
});
