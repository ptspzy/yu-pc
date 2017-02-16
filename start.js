var keystone = require('keystone');


process.env.NODE_ENV = "production"
process.env.PORT = 80

keystone.init({

    'name': 'ptspzy',
    'brand': 'Demo',

    // 'env': process.env.NODE_ENV || "development",
    // 'port': process.env.PORT || 80,

    'favicon': 'public/favicon.ico',
    'less': 'public',
    'static': 'public',

    'views': 'templates/views',
    'view engine': 'pug',

    'auto update': true,
    'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/ptspzy',
    'cloudinary config': 'cloudinary://139494376698928:lmUei4-UwFu5atPYg7yvUu2I_x8@dce0nrfeu',

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': process.env.COOKIE_SECRET || 'demo',

    'ga property': process.env.GA_PROPERTY,
    'ga domain': process.env.GA_DOMAIN,

    'chartbeat property': process.env.CHARTBEAT_PROPERTY,
    'chartbeat domain': process.env.CHARTBEAT_DOMAIN

});

keystone.import('models');

keystone.set('locals', {
    _: require('lodash'),
    env: keystone.get('env'),
    utils: keystone.utils,
    editable: keystone.content.editable,
    ga_property: keystone.get('ga property'),
    ga_domain: keystone.get('ga domain'),
    chartbeat_property: keystone.get('chartbeat property'),
    chartbeat_domain: keystone.get('chartbeat domain')
});

keystone.set('routes', require('./routes'));

// keystone.set('port', process.env.PORT || 3000);

keystone.set('nav', {
    'posts': ['posts', 'post-comments', 'post-categories'],
    'galleries': 'galleries',
    'enquiries': 'enquiries',
    'users': 'users',
    'field-tests': 'things'
});

keystone.start();
