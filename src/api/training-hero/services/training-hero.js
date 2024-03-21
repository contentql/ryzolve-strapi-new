'use strict';

/**
 * training-hero service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::training-hero.training-hero');
