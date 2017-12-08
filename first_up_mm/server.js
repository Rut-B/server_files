var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function (req, res) {

fs.readFile('index.html', function(err, data) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(data);
 res.end();
});


if (req.url == '/fileupload') {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
	var oldpath = files.filetoupload.path;
	var newpath = files.filetoupload.name;
	fs.rename(oldpath, newpath, function (err) {
	if (err) throw err;
		
	
});
		console.log("oplwod files.");
	});
}
 



}).listen(8080);

