const http = require('http')

const sever = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('hello page')
    }
    if (req.url === '/hieu') {
        res.end('ta la ta de')
    }
})

sever.listen(7100)