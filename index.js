const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlmethods = require('./urlmethods.js');

app.get('/_health', (req, res) => {
  res.status(200);
  res.send('Health!');
});

app.use(bodyParser.json({ type: 'application/json' }));

app.post('/urls', urlmethods.addNewUrl);
app.get('/urls', urlmethods.getUrls);
app.delete('/urls', urlmethods.deleteUrl);

app.get('/tinyurl/:turl', urlmethods.redirect);

app.listen(3000);
