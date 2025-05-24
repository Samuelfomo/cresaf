const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const emailRoutes = require('./src/service/router');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';

console.log("🚀 Démarrage du serveur CRESAF...");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', emailRoutes);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Serveur CRESAF démarré avec succès !`);
  console.log(`   URL: ${HOST}:${PORT}`);
  console.log(`   Environnement: ${process.env.NODE_ENV || 'development'}`);
  console.log(`   Timestamp: ${new Date().toISOString()}`);
});