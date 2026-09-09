const app = require('./app/config/server');

// Importa os módulos de rota
const rotaHome = require('./app/routes/home');
const rotaSobre = require('./app/routes/sobre');
const rotaProgramacao = require('./app/routes/programacao');
const rotaContato = require('./app/routes/contato');
const rotaInscricao = require('./app/routes/inscricao');
const rotaNovidades = require('./app/routes/novidades');

// Executa cada módulo de rota passando o app
rotaHome(app);
rotaSobre(app);
rotaProgramacao(app);
rotaContato(app);
rotaInscricao(app);
rotaNovidades(app);

const PORTA = 3000;

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});