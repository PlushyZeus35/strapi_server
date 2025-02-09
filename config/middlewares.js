module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
        contentSecurityPolicy: {
            useDefaults: true,
            directives: {
                'connect-src': ["'self'", 'https:'],
            },
        },
    },
},
  'strapi::poweredBy',
  {
     name: 'strapi::cors',
     config: {
        enabled: true,
	origin: '*',
	headers: '*',
     },
  },
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
