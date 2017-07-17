
var URL_DB = []


addNewUrl = (req, res) => {
    var index = URL_DB.findIndex( function(current){
        return current.longUrl == req.body.url;
    });
    if( index<0 ){
        var short = Math.random().toString(36).substring(2,7);
        URL_DB.push({
            longUrl : req.body.url,
            shortUrl : short
        });
        res.status(200);
        console.log('Url added to DB');
        res.send({
            "longUrl" : req.body.url,
            "shortUrl" : short
        });
    }
    else{
        res.status(200);
        console.log('Url founded in DB');
        res.send(URL_DB[index]);
    }
};

getUrls = (req, res) => {
    res.status(200);
    res.send(URL_DB);
};



module.exports.addNewUrl = addNewUrl;
module.exports.getUrls = getUrls;
