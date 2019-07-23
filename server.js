const http = require('http');
const port = 3000;
const fs = require('fs');
let index = fs.readFileSync('./index.html');
//let style = fs.readFileSync('style.css');

http.createServer((req, res) =>{
	if (req.url === '/') {
		fs.readFile('index.html', 'utf-8', (err, data) =>{
			res.write(data);
	        res.end();	
		});	
	} else if (req.url === '/contact') {
		res.write('<h1>Node js is the best!!!</h1>');
		res.end();
	}  else {
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
		res.write('Who are you?');
		res.end(index);
	}
}).listen(port, function () {
	console.log('Server at http://localhost:3000');
});
