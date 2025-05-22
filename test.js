require('dotenv').config();
const envoyerMail = require('./src/service/emailSender'); // Ajustez le chemin selon votre structure

async function testComplet() {
    console.log("🧪 TEST COMPLET DE LA CONFIGURATION EMAIL");
    console.log("═".repeat(60));

    // Vérification des variables d'environnement
    console.log("1️⃣ Vérification des variables d'environnement :");
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
    let envOK = true;

    requiredEnvVars.forEach(varName => {
        const value = process.env[varName];
        if (value) {
            console.log(`   ✅ ${varName}: ${varName === 'SMTP_PASS' ? 'OK (masqué)' : value}`);
        } else {
            console.log(`   ❌ ${varName}: MANQUANT`);
            envOK = false;
        }
    });

    if (!envOK) {
        console.log("\n❌ Configuration incomplète ! Vérifiez votre fichier .env");
        return;
    }

    console.log("\n2️⃣ Test d'envoi d'email...");
    console.log("-".repeat(40));

    try {
        const destinataire = "noreply@cresaf.com"; // S'envoyer à soi-même pour le test
        const cc = {
            samuel: "samuel@imediatis.net",
            support: "support@cresaf.com"
        };

        const result = await envoyerMail(
            destinataire,
            cc,
            "🧪 Test Configuration SMTP - " + new Date().toLocaleString(),
            `Test de configuration SMTP réussi !

Configuration utilisée :
- Serveur : ${process.env.SMTP_HOST}
- Port : ${process.env.SMTP_PORT}
- Utilisateur : ${process.env.SMTP_USER}

Date du test : ${new Date().toLocaleString()}

Si vous recevez cet email, la configuration est opérationnelle ! 🎉`
        );

        if (result.success) {
            console.log("\n🎉 TEST RÉUSSI !");
            console.log("══════════════════");
            console.log("✅ Configuration SMTP validée");
            console.log("✅ Email envoyé avec succès");
            console.log(`✅ Message ID : ${result.messageId}`);
            console.log(`✅ Destinataire : ${result.to}`);
            if (result.cc && result.cc.length > 0) {
                console.log(`✅ CC : ${result.cc.join(', ')}`);
            }
            console.log("\n🚀 Votre service email est prêt à être utilisé !");

        } else {
            console.log("\n❌ TEST ÉCHOUÉ");
            console.log("═════════════════");
            console.log("Erreur :", result.error);
            console.log("\n🔧 Actions à effectuer :");
            console.log("1. Vérifiez les paramètres dans votre panel IONOS");
            console.log("2. Assurez-vous que 'Activer la redirection du courrier' est COCHÉ");
            console.log("3. Vérifiez que l'accès SMTP est autorisé");
            console.log("4. Régénérez le mot de passe de l'adresse email");
        }

    } catch (error) {
        console.error("\n💥 ERREUR INATTENDUE :");
        console.error(error.message);
    }
}

// Lancer le test
testComplet();