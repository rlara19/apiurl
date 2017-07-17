const express = require('express');
const app = express();

app.get('/_health', function(req, res) {
    res.status(200);
    res.send('Hello!!');
});


app.listen(3000);