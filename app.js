const http = require('http');

const server = http.createServer((request,response) => {
    const url = request.url;
    // if(url === '/') {
    //     response.setHeader('Content-Type','text/html'); 
    // response.write('<html>');
    // response.write('<head><title>Enter message</title></head>');
    // response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    // response.write('</html>')
    // return response.end();
    // }
    if(url === '/home'){
        response.setHeader('Content-Type','text/html'); 
    response.write('<html>');
    response.write('<head><title>Enter message</title></head>');
    response.write('<body><h1>Welcome Home</h1></body>');
    response.write('</html>')
    return response.end();
    }
    else if(url === '/about'){
        response.setHeader('Content-Type','text/html'); 
    response.write('<html>');
    response.write('<head><title>Enter message</title></head>');
    response.write('<body><h1>Welcome to About Us</h1></body>');
    response.write('</html>')
    return response.end();
    }
    else if(url === '/node'){
        response.setHeader('Content-Type','text/html'); 
    response.write('<html>');
    response.write('<head><title>Enter message</title></head>');
    response.write('<body><h1>Welcome to my Node Js project</h1></body>');
    response.write('</html>')
    return response.end();
    }
    response.setHeader('Content-Type','text/html');
    response.write('<html>');
    response.write('<head><title>My First Page</title><head>');
    response.write('<body><h1>Hello from my first node.js server</h1></body>');
    response.write('</hmtl');
    response.end();
});

server.listen(4000);

