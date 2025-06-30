'use strict';

/**
 * meal-day service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meal-day.meal-day');
