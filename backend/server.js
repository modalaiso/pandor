const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'pandor.html'));
});

app.get('/nos-serveices', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'nos-serveices.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur : http://localhost:${PORT}`);
});