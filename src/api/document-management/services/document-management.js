'use strict';

/**
 * document-management service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::document-management.document-management');
