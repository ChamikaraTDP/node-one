const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to web server');
  }
  else if (req.url === '/about') {
    res.end('you arrived at the about page');
  } else {
    res.end(`<h1>Oops</h1><p>404 Not Found!</p>`);
  }
});

server.listen(5000);
