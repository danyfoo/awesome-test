/*
HTTP SERVER

var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'Access-Control-Allow-Origin' : '*'
    });

    var readStream = fs.createReadStream(__dirname + '/index.html');

    readStream.pipe(res);
}).listen(3000);

console.log('Visit me at http://localhost:3000');
*/

var express = require('express'),
    app = express(),
    path = require('path');

app.use('/',express.static(__dirname + '/public'));

var adminRoutes = require('./routes/adminRoutes')(app, express),
    basicRoutes = require('./routes/basicRoutes')(app, express),
    apiRoutes = require('./routes/apiRoutes')(app, express);



app.use('/', basicRoutes);
app.use('/admin', adminRoutes);
app.use('/api', apiRoutes);

app.listen(3000);
console.log('Visit me at http://localhost:3000');