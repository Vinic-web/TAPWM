module.exports = function (app) {
  app.get('/admin/inscricao', (req, res) => {
    res.render('admin/inscricao');
  });
};