var express = require('express');
var app = express();
var port = process.env.port || 5000;
app.use(express.static('public'));
app.use(express.static('src/views'));
 
app.get('/books', function (req, res) {
	res.send('Hello books !!! Welcome');
});

app.listen(port, function () {
	console.log('Example app listening on port '+port);
});