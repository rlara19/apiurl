const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var urlmethods = require('./urlmethods.js');

app.get('/_health', function(req, res) {
    res.status(200);
    res.send('Health!');
});

app.use(bodyParser.json({ type : 'application/json'}));


app.post('/addUrl', urlmethods.addNewUrl);
app.get('/getUrls', urlmethods.getUrls);


app.listen(3000);