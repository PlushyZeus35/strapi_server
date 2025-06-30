'use strict';

/**
 * ai-log service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ai-log.ai-log');
