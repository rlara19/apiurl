const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/_health', function(req, res) {
    res.status(200);
    res.send('Health!');
});

app.use(bodyParser.json({ type : 'application/json'}));


app.listen(3000);