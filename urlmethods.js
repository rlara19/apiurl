const Sequelize = require('sequelize');
const URL = require('./models.js');

const sequelize = new Sequelize('url_db', 'root', null, {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database: ', err);
  });


module.exports.addNewUrl = (req, res) => {
  const short = Math.random().toString(36).substring(2, 7);
  URL(sequelize, Sequelize.DataTypes).max('URL_id').then((c) => {
    URL(sequelize, Sequelize.DataTypes).findOrCreate({
      where: { longURL: req.body.url },
      defaults: { URL_id: `${c + 1}`, shortURL: short },
    }).spread((url, created) => {
      if (created) {
        res.status(201).send(url.dataValues);
      } else {
        res.status(304).send(url);
      }
    });
  });
};

module.exports.getUrls = (req, res) => {
  URL(sequelize, Sequelize.DataTypes).findAll().then((urls) => {
    res.status(200).send(urls);
  });
};

module.exports.deleteUrl = (req, res) => {
  console.log(req.body.url);
  URL(sequelize, Sequelize.DataTypes).destroy({
    where: { longUrl: req.body.url },
  });
  res.status(200).send(req.body.url);
};

module.exports.redirect = (req, res) => {
  URL(sequelize, Sequelize.DataTypes).findAll({
    where: { shortURL: req.params.turl },
  })
  .then((c) => {
    if (c.length > 0) {
      console.log(`Founded  ${c[0].longURL}`);
      res.redirect(c[0].longURL);
    } else {
      console.log(c);
      res.status(400).send('URL not found in DB');
    }
  });
};
