const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url == '/')
    {
        res.write('<html>');
        res.write('<head>Enter a Message</head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end;  
    }

    console.log(req.url, req.method, req.headers)
    // process.exit;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>Rob</body>')
    res.write('</html>');
    res.end;
});

server.listen(3000);