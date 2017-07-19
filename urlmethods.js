const Sequelize = require('sequelize');
const URL = require('./models.js');

const sequelize = new Sequelize('url_db', 'root', null, {
  dialect: 'mysql',
});

const URL_DB = [];

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database: ', err);
  });


module.exports.addNewUrl = (req, res) => {
  const index = URL_DB.findIndex(current => (current.longUrl === req.body.url));
  if (index < 0) {
    const short = Math.random().toString(36).substring(2, 7);
    URL.count().then((c) => {
      URL.create({ URL_id: `${c + 1}`,
        longURL: req.body.url,
        shortURL: short,
      })
      .then(url => res.satatus(201).send(url))
      .catch(err => res.status(400).send(err));
    });
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

module.exports.getUrls = (req, res) => {
  res.status(200);
  res.send(URL_DB);
};
