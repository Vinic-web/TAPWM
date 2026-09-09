const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

// Serve arquivos estáticos (css, imagens etc.)
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;