'use strict';

/**
 * ask-information service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ask-information.ask-information');
