require('dotenv').config();
const nodemailer = require('nodemailer');
console.log("🔐 SMTP_USER:", process.env.SMTP_USER);
console.log("🔐 SMTP_PASS:", process.env.SMTP_PASS ? 'OK' : 'Missing');

/**
 * Envoie un email via SMTP avec CC.
 * @param {string} to - Adresse email principale du destinataire.
 * @param {Object} ccList - Objet des destinataires en copie conforme { nom: email }.
 * @param {string} subject - Sujet de l'email.
 * @param {string} message - Contenu texte de l'email.
 */
async function envoyerMail(to, ccList, subject, message) {
    const host = "imediatiscloud.com";
    const port = 465;
    const userName = "noreply@cresaf.com";
    const pass = "I0jqs?946";

    try {
        // Création du transporteur SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: true, // true pour le port 465, false pour 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Conversion de l'objet CC en tableau d'adresses
        const ccEmails = Object.values(ccList);

        // Envoi du mail
        const info = await transporter.sendMail({
            from: `"Cresaf" <${process.env.SMTP_USER}>`,
            to: to,
            cc: ccEmails,
            subject: subject,
            text: message,
        });

        console.log("📤 Email envoyé avec succès :", info.messageId);
    } catch (error) {
        console.error("❌ Erreur lors de l'envoi de l'email :", error.message);
    }
}

module.exports = envoyerMail;
