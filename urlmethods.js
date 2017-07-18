const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'urluser', 'password', {
  username: 'urluser',
  password: 'password',
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
});

const URL_DB = [];

sequelize.sync();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been establishe successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database: ', err);
  });


module.exports.addNewUrl = (req, res) => {
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

module.exports.getUrls = (req, res) => {
  res.status(200);
  res.send(URL_DB);
};
