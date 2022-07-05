const http = require('http');
const fs = require('fs');
const homePage = fs.readFileSync('/the websites/home.html');
const productsPage = fs.readFileSync('/the websites/productDetails.html')
const server = http.createServer((req,res) => {
    if(req.url=== '/the websites/home.html') {
        res.end(homePage)
    }
    else if(req.url=== '/the websites/productDetails.html') {
        res.end(productsPage)
    }
    else {
        res.writeHead(404)
        res.end('Page Not Found')
    }
})

server.listen(5000)