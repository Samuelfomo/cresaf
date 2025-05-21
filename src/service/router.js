const express = require('express');
const router = express.Router();
const envoyerMail = require('./emailSender');

router.post('/', async (req, res) => {
    const destinataire = "client@example.com";
    const cc = {
        samuel: "samuel@imediatis.net",
        support: "support@cresaf.com"
    };

   await envoyerMail(destinataire, cc, "Test de message", "Ceci est un test d'envoi avec CC.");

})

module.exports = router;
