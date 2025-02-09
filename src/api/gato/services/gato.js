'use strict';

/**
 * gato service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gato.gato');
