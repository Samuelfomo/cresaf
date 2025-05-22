const express = require('express');
const router = express.Router();
const emailService = require('./emailSender');

router.post('/email', async (req, res) => {
    try {
        const {firstName, lastName, email, mobile, subject, message, source} = req.body;
        // const agence = "samuel@imediatis.net";
        const agence = {
            samuel: "samuel@imediatis.net",
            // support: "support@cresaf.com",
            // manfred: "manfred@fredcode.net",
        };

        if (!lastName || !email || !subject || !message || !mobile) {
            return res.status(400).json({
                success: false,
                message: 'Champs obligatoires manquants'
            });
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Format d\'email invalide'
            });
        }

        // Préparation des données pour l'envoi
        const emailData = {firstName: firstName || '', lastName, email, mobile, subject, agence, message, source: source || 'Site web CRESAF', timestamp: new Date().toISOString(), ip: req.ip};
        const result = await emailService.sendEmail(emailData);

        if (result.success) {

            res.status(200).json({
                success: true,
                message: 'Votre message a été envoyé avec succès',
                messageId: result.messageId,
                timestamp: new Date().toISOString()
            });
        } else {
            console.error("❌ Échec de l'envoi du message");
            console.error("   Erreur:", result);

            res.status(500).json({
                success: false,
                message: 'Erreur lors de l\'envoi de votre message',
                error: result.error
            });
        }

    } catch (error) {
        console.error("❌ Erreur dans la route contact:", error.message);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur lors du traitement de votre demande',
            error: error.message
        });
    }
});

module.exports = router;