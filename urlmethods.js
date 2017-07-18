const URL_DB = [];


const addNewUrl = (req, res) => {
  const index = URL_DB.findIndex(current => (current.longUrl === req.body.url));
  if (index < 0) {
    const short = Math.random().toString(36).substring(2, 7);
    URL_DB.push({
      longUrl: req.body.url,
      shortUrl: short,
    });
    res.status(201);
    res.send({
      longUrl: req.body.url,
      shortUrl: short,
    });
  } else {
    res.status(304);
    res.send(URL_DB[index]);
  }
};

const getUrls = (req, res) => {
  res.status(200);
  res.send(URL_DB);
};


module.exports.addNewUrl = addNewUrl;
module.exports.getUrls = getUrls;
