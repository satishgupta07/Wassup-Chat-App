const express = require('express')

const app = express()

const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

http.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})