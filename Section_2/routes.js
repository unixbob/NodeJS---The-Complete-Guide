const fs = require('fs');

const requestHandler = (req, res) => {
 const url = req.url;
 const method =  req.method;

    if (url == '/')
    {
        res.write('<html>');
        res.write('<head>Enter a Message</head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();  
    }
    if (url == '/message' && method == 'POST' ) {
        const body = [];
         req.on('data', (chunk) => {
		console.log(chunk);
            body.push(chunk);
         });
         req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
         });
         
         res.statusCode = 302;
         res.setHeader('Location','/');
         return res.end();
    }
    // console.log(req.url, req.method, req.headers)
    // process.exit;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>Rob</body>')
    res.write('</html>');
    res.end();
};


module.export = requestHandler;
