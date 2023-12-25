'use strict';

/**
 * claims-and-billing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::claims-and-billing.claims-and-billing');
