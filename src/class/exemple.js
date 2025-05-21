// server.js - API Node.js pour l'envoi d'emails

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration du transporteur de mail (à configurer avec vos informations SMTP)
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE === 'true', // true pour 465, false pour les autres ports
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

// Route API pour l'envoi d'email
app.post('/api/contact', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            subject,
            agence, // C'est l'email de l'agence sélectionnée
            message,
            source
        } = req.body;

        // Vérification des champs obligatoires
        if (!firstName || !lastName || !email || !subject || !agence || !message) {
            return res.status(400).json({
                success: false,
                message: 'Tous les champs obligatoires doivent être remplis'
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

        // Construction du sujet de l'email en fonction de l'objet sélectionné
        let emailSubject = '';
        switch (subject) {
            case 'information':
                emailSubject = 'Demande d\'information';
                break;
            case 'formation':
                emailSubject = 'Demande de formation';
                break;
            case 'consultation':
                emailSubject = 'Demande de consultation';
                break;
            case 'partenariat':
                emailSubject = 'Proposition de partenariat';
                break;
            case 'autre':
                emailSubject = 'Autre demande';
                break;
            default:
                emailSubject = 'Nouveau message du formulaire de contact';
        }

        // Construction du contenu de l'email
        const mailOptions = {
            from: `"CRESAF Site Web" <${process.env.MAIL_FROM}>`,
            to: agence, // Email de l'agence sélectionnée
            cc: process.env.MAIL_CC, // Optionnel: copie à d'autres adresses
            replyTo: email, // Pour que la réponse aille directement au client
            subject: `${emailSubject} - ${firstName} ${lastName}`,
            html: `
        <h2>Nouveau message depuis le formulaire de contact</h2>
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non spécifié'}</p>
        <p><strong>Sujet:</strong> ${emailSubject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p><strong>Source:</strong> ${source || 'Non spécifiée'}</p>
        <hr>
        <p style="font-size: 12px; color: #777;">Ce message a été envoyé depuis le formulaire de contact du site web CRESAF.</p>
      `
        };

        // Envoi de l'email
        await transporter.sendMail(mailOptions);

        // Email de confirmation au client (optionnel)
        if (process.env.SEND_CONFIRMATION === 'true') {
            const confirmationMailOptions = {
                from: `"CRESAF" <${process.env.MAIL_FROM}>`,
                to: email,
                subject: `Confirmation de votre message - CRESAF`,
                html: `
          <h2>Merci de nous avoir contacté</h2>
          <p>Cher(e) ${firstName} ${lastName},</p>
          <p>Nous avons bien reçu votre message concernant "${emailSubject}".</p>
          <p>Notre équipe l'examinera dans les plus brefs délais et vous répondra rapidement.</p>
          <p>Cordialement,</p>
          <p>L'équipe CRESAF</p>
        `
            };

            await transporter.sendMail(confirmationMailOptions);
        }

        // Réponse réussie
        return res.status(200).json({
            success: true,
            message: 'Email envoyé avec succès'
        });

    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de l\'envoi de l\'email',
            error: error.message
        });
    }
});

// Route pour vérifier que le serveur fonctionne
app.get('/api/status', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Le serveur est opérationnel' });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});