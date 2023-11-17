const config = {
  locales: [
    'fr',
  ],
  translations: {
    // Add missing keys in the FR locale
    fr: {
      'Auth.form.email.label': 'test',
      User: 'Utilisateur',
      Users: 'Utilisateurs',
      Username: 'Nom d\'utilisateur',
      Email: 'Email',
      Tel: 'Téléphone',
      Password: 'Mot de passe',
      'Password confirmation': 'Confirmation du mot de passe',
      confirmed: 'Confirmé',
      City: 'Ville',
      PostCode: 'Code postal',
      Id: 'ID french',
      // Ask information
      askInformation: 'Demande d\'information',
      askInformations: 'Demandes d\'information',
      firstName: 'Prénom',
      lastName: 'Nom',
      contactEmail: 'Email de contact',
      contactPhone: 'Téléphone de contact',
      comment: 'Commentaire',
      // globalSettings
      globalSetting: 'Paramètres globaux',
      globalSettings: 'Paramètres globaux',
      siteName: 'Nom du site',
      siteDescription: 'Description du site',
      siteLogo: 'Logo du site',
      siteBanner: 'Bannière du site',
      contactCompany: 'Contact de l\'entreprise',
      nameCompany: 'Nom de l\'entreprise',
      addressCompany: 'Adresse de l\'entreprise',
      cityCompany: 'Ville de l\'entreprise',
      postCodeCompany: 'Code postal de l\'entreprise',
      emailCompany: 'Email de l\'entreprise',
      phoneCompany: 'Téléphone de l\'entreprise',
      openingHours: 'Horaires d\'ouverture',
      day: 'Jour',
      openMorning: 'Ouverture matin',
      openAfternoon: 'Ouverture après-midi',
      closeMorning: 'Fermeture matin',
      closeAfternoon: 'Fermeture après-midi',
      // Page
      Title: 'Titre',
      slug: 'Slug',
      Meta_Title: 'Meta Title',
      Meta_Keywords: 'Meta Keywords',
      Script: 'Script',
      Styles: 'Styles',
      Banner: 'Bannière',
      resume: 'Résumé',
      Position: 'Position',
      sections: 'Sections',
      name: 'Nom',
      content: 'Contenu',
      media: 'Média',
      disposition: 'Disposition',
      headerTitle: 'Titre de l\'en-tête',
      headerPosition: 'Position de l\'en-tête',
      footerTitle: 'Titre du pied de page',
      footerPosition: 'Position du pied de page',
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
