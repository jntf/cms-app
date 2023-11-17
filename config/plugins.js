module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'contact@26quatre.com',
        defaultReplyTo: 'contact@26quatre.com',
        testAddress: 'contact@26quatre.com',
      },
    },
  },
});