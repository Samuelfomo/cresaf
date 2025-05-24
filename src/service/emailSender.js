require('dotenv').config();
const nodemailer = require('nodemailer');

const SMTP_CONFIG = {
    host: process.env.SMTP_HOST || 'imediatiscloud.com',
    port: parseInt(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
};

const EMAIL_CONFIG = {
    from: process.env.MAIL_FROM || `"CRESAF" <${SMTP_CONFIG.auth.user}>`,
    cc: process.env.MAIL_CC || "manfred@fredcode.net",
    replyTo: null, // Sera défini dynamiquement
    sendConfirmation: process.env.SEND_CONFIRMATION === 'true'
};

function createContenuHTML(data) {
    const sujetFormate = data.subject;

    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
                📬 Nouveau message depuis le formulaire de contact CRESAF
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #2c3e50; margin-top: 0;">👤 Informations du contact</h3>
                <p><strong>Nom complet:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                <p><strong>Téléphone:</strong> ${data.mobile}</p>
                <p><strong>Sujet:</strong> ${sujetFormate}</p>
            </div>
            
            <div style="background-color: #fff; border: 1px solid #dee2e6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #2c3e50; margin-top: 0;">💬 Message</h3>
                <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">
                    ${data.message.replace(/\n/g, '<br>')}
                </div>
            </div>
            
            <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h4 style="color: #495057; margin-top: 0;">📊 Informations techniques</h4>
                <p><strong>Source:</strong> ${data.source}</p>
                <p><strong>Date d'envoi:</strong> ${new Date(data.timestamp).toLocaleString('fr-FR')}</p>
                <p><strong>IP:</strong> ${data.ip || 'Non disponible'}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
            <p style="font-size: 12px; color: #6c757d; text-align: center;">
                Ce message a été envoyé automatiquement depuis le formulaire de contact du site web CRESAF.<br>
                Pour répondre, utilisez directement l'adresse email du contact : ${data.email}
            </p>
        </div>
    `;
}

async function sendEmail(emailData) {
    try {
        // Création du transporteur SMTP
        const sender = nodemailer.createTransport(SMTP_CONFIG);

        await sender.verify();

        const sujetFormate = emailData.subject;
        const contenuHTML = createContenuHTML(emailData);
        let destinataires = [];
        if (typeof emailData.agence === 'object') {
            destinataires = Object.values(emailData.agence);
        } else if (typeof emailData.agence === 'string') {
            destinataires = [emailData.agence];
        }

        // Configuration du mail principal
        const mailOptions = {
            from: EMAIL_CONFIG.from,
            to: destinataires,
            cc: EMAIL_CONFIG.cc,
            replyTo: emailData.email,
            subject: `${sujetFormate} - ${emailData.firstName} ${emailData.lastName}`,
            html: contenuHTML,
            text: `Nouveau message de ${emailData.firstName} ${emailData.lastName} (${emailData.email})\n\nSujet: ${sujetFormate}\n\nMessage:\n${emailData.message}`
        };
        const info = await sender.sendMail(mailOptions);

        return {
            success: true,
            messageId: info.messageId,
            to: emailData.agence,
            cc: EMAIL_CONFIG.cc,
            confirmationSent: EMAIL_CONFIG.sendConfirmation
        };

    } catch (error) {
        console.error("   Message :", error.message);
        return {
            success: false,
            error: error.message,
            code: error.code
        };
    }
}

module.exports = {
    sendEmail,
};
