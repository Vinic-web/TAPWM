module.exports = function (app) {
  app.get('/contato', (req, res) => {
    res.render('evento/contato');
  });
};