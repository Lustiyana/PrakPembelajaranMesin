'use strict';

/**
 * related service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::related.related');
