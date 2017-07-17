const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var urlmethods = require('./urlmethods.js');

app.get('/_health', function(req, res) {
    res.status(200);
    res.send('Health!');
});

app.use(bodyParser.json({ type : 'application/json'}));


app.post('/urls', urlmethods.addNewUrl);
app.get('/urls', urlmethods.getUrls);


app.listen(3000);