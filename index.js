var express = require('express');
var wwwhisper = require('connect-wwwhisper');
var app = express();

// for restricting access to dev and staging sites
if(process.env.ENV !== 'live') {
    app.use(wwwhisper());
}

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.send('blablahh the fourth!. Here is the env ' + process.env.ENV);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
