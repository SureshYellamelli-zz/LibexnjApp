var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/books',function(req,res){
	res.send("Hello books !!! Welcome");
});

app.listen(5000,function(){	
	console.log('Example app listening on port 5000');
});