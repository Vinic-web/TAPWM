module.exports = function (app) {
  app.get('/sobre', (req, res) => {
    res.render('evento/sobre');
  });
};