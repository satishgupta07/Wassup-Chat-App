const express = require('express')

const app = express()

const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

http.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})