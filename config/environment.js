/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'client',
        podModulePrefix: 'client/pods',
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
                'ember-htmlbars-component-generation': false
            },
            API_HOST: 'http://local.host:4200'
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },
        contentSecurityPolicy: {
            'default-src': "'self'",
            'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://local.host:35729 http://cred-client.herokuapp.com:35729 https://*.googleapis.com https://maps.gstatic.com http://*.facebook.net https://*.facebook.net http://*.facebook.com https://*.facebook.com",
            'font-src': "'self' http://*.gstatic.com https://*.gstatic.com",
            'connect-src': "'self' https://api.github.com/  ws://local.host:35729 ws://cred-client.herokuapp.com:35729 http://*.correiocontrol.com.br http://local.host:4200 http://cred-client.herokuapp.com http://cred-server.herokuapp.com https://cred-server.herokuapp.com http://local.host:1337",
            'img-src': "'self' https://avatars.githubusercontent.com http://s3-us-west-2.amazonaws.com https://*.gstatic.com https://*.googleapis.com https://*.facebook.com https://*.akamaihd.net",
            'report-uri': "'local.host' cred-client.herokuapp.com",
            'style-src': "'self' 'unsafe-inline' http://*.googleapis.com https://*.googleapis.com",
            'frame-src': "'self' http://*.facebook.net https://*.facebook.net http://*.facebook.com https://*.facebook.com"
        },
    };

    if (environment === 'production') {
        ENV.EmberENV.API_HOST = 'http://cred-server.herokuapp.com';

        ENV['simple-auth'] = {
            authenticationRoute: 'login',
            crossOriginWhitelist: [ENV.EmberENV.API_HOST],
            authorizer: 'simple-auth-authorizer:oauth2-bearer'
        };

        ENV['simple-auth-oauth2'] = {
            refreshAccessTokens: true,
            serverTokenEndpoint: ENV.EmberENV.API_HOST + '/api/v1/auths/login'
        };
    }

    if (environment === 'stage-online') {
        ENV.EmberENV.API_HOST = 'http://cred-server.herokuapp.com';

        ENV['simple-auth'] = {
            authenticationRoute: 'login',
            crossOriginWhitelist: [ENV.EmberENV.API_HOST],
            authorizer: 'simple-auth-authorizer:oauth2-bearer'
        };

        ENV['simple-auth-oauth2'] = {
            refreshAccessTokens: true,
            serverTokenEndpoint: ENV.EmberENV.API_HOST + '/api/v1/auths/login'
        };
    }

    if (environment === 'stage-local') {
        ENV.EmberENV.API_HOST = 'http://local.host:1337';
        ENV['simple-auth'] = {
            authenticationRoute: 'login',
            crossOriginWhitelist: [ENV.EmberENV.API_HOST],
            authorizer: 'simple-auth-authorizer:oauth2-bearer'
        };

        ENV['simple-auth-oauth2'] = {
            refreshAccessTokens: true,
            serverTokenEndpoint: '/api/v1/auths/login'
        };
    }

    if (environment === 'development') {
        // ENV.EmberENV.API_HOST = 'http://local.host:4200';
        ENV.EmberENV.API_HOST = 'http://local.host:1337';
        ENV['simple-auth'] = {
            authenticationRoute: 'login',
            crossOriginWhitelist: [ENV.EmberENV.API_HOST],
            authorizer: 'simple-auth-authorizer:oauth2-bearer'
        };

        ENV['simple-auth-oauth2'] = {
            refreshAccessTokens: true,
            serverTokenEndpoint: '/api/v1/auths/login'
        };

        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};