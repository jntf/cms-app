// path: ./src/api/ask-information/content-types/ask-information/lifecycles.js

module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugin('email').service('email').send({
                to: 'julien.nataf@gmail.com',
                from: 'contact@26quatre.com',
                replyTo: result.email,
                subject: 'Nouvelle demande de renseignement',
                text: `
            Nom: ${result.lastname}
            Prénom: ${result.firstname}
            Email: ${result.email}
            Téléphone: ${result.tel}
            Sujet: ${result.subject}
            Commentaire: ${result.message}
          `,
                html: `
            <h1>Nouvelle demande de renseignement HTML</h1>
            <p><strong>Nom:</strong> ${result.lastname}</p>
            <p><strong>Prénom:</strong> ${result.firstname}</p>
            <p><strong>Email:</strong> ${result.email}</p>
            <p><strong>Téléphone:</strong> ${result.tel}</p>
            <p><strong>Sujet:</strong> ${result.subject}</p>
            <p><strong>Commentaire:</strong> ${result.message}</p>
          `,
            });
        } catch (error) {
            strapi.log.debug(`Sending email to: ${result.email}`, error);
        }
    },
};
