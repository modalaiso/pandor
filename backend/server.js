const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Dossier des fichiers statiques (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, '../frontend')));

// Redirection /index vers /
app.get('/index', (req, res) => {
  res.redirect('/');
});

// Routes dynamiques sans .html
app.get('/:page', (req, res, next) => {
  const filePath = path.join(__dirname, '../frontend', `${req.params.page}.html`);
  res.sendFile(filePath, (err) => {
    if (err) next(); // Si la page n'existe pas, on passe à la suite
  });
});

// Route principale /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Page 404 si aucune route ne correspond
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../frontend/404.html')); // Crée un fichier 404.html
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur actif sur http://localhost:${port}`);
});
