const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        const filePath = path.join(__dirname, 'message.txt');
        fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
            response.setHeader('Content-Type', 'text/html');
            response.write('<html>');
            response.write('<head><title>Enter message</title></head>');
            response.write(`<body>${data}</body>`);
            response.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
            response.write('</html>');
            return response.end();
        });
    }
    else if (url === '/message' && method === 'POST') {
        const body = [];
        request.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('&')[0].split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });
        });
    }
    else {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>My First Page</title></head>');
        response.write('<body><h1>Hello from my first node.js server</h1></body>');
        response.write('</html>');
        response.end();
    }
});

server.listen(3000);
