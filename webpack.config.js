const path = require('path');

module.exports = {
    entry: './src/index.jsx', // Point d'entrée
    output: {
        filename: 'bundle.js', // Nom du fichier de sortie
        path: path.resolve(__dirname, 'dist'), // Dossier de sortie
    },
    mode: 'development', // Mode développement
};