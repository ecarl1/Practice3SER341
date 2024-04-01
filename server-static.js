const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        let fileUrl = req.url === '/' ? '/index.html' : req.url;
        let filePath = path.resolve('./public' + fileUrl);
        let fileExt = path.extname(filePath);

        if (fileExt === '.html') {
            fs.stat(filePath, (err, stat) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    fs.readFile(filePath, (err, data) => {
                        if (err) {
                            res.statusCode = 500;
                            res.end('500 Internal Server Error');
                        } else {
                            // Send the content to the client
                            res.end(data);
                            // Save the response to the specified file system path
                            const baseName = path.basename(fileUrl);
                            let savePath = `C://Users//ericm//Downloads//Practice3SER341//text`;
                            fs.writeFile(savePath, data, (err) => {
                                if (err) {
                                    console.error(`Error saving file: ${err}`);
                                } else {
                                    console.log(`File saved: ${savePath}`);
                                }
                            });
                        }
                    });
                }
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
