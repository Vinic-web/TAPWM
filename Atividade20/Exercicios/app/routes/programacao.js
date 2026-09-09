module.exports = function (app) {
  app.get('/programacao', (req, res) => {
    res.render('evento/programacao');
  });
};