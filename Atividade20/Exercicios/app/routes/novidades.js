module.exports = function (app) {
  app.get('/novidades', (req, res) => {
    // Diferença entre res.render() e res.send():
    // res.render() usa a view engine (EJS) para processar um arquivo .ejs,
    // injetar dados dinâmicos nele e gerar o HTML final antes de enviar.
    // Já o res.send() envia a resposta diretamente, sem passar por nenhum
    // template — aqui estamos montando o HTML "na mão", como uma string,
    // e mandando pronto pro navegador.
    res.send(`
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Novidades - Semana de Tecnologia</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="/css/style.css" rel="stylesheet">
      </head>
      <body>

        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="/">Semana de Tecnologia</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="/sobre">Sobre</a></li>
                <li class="nav-item"><a class="nav-link" href="/programacao">Programação</a></li>
                <li class="nav-item"><a class="nav-link" href="/contato">Contato</a></li>
                <li class="nav-item"><a class="nav-link" href="/admin/inscricao">Inscrição</a></li>
                <li class="nav-item"><a class="nav-link active" href="/novidades">Novidades</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <section class="secao">
          <div class="container">
            <h1 class="mb-4">Novidades</h1>
            <div class="faixa-info">
              <p class="mb-0">Novas atrações confirmadas: mesa redonda sobre carreiras em tech,
              hackathon de 24h e feira de startups no último dia do evento.
              Fiquem de olho nas próximas atualizações!</p>
            </div>
            <a href="/" class="btn btn-outline-dark-custom mt-4">&larr; Voltar</a>
          </div>
        </section>

        <footer>
          <div class="container">
            <p class="mb-0">Semana de Tecnologia &mdash; 2025</p>
          </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
      </html>
    `);
  });
};