'use strict';
var Path = require('path');

// Declare internals

const internals = {};

// Load main module. 

exports.register = (server, options, next) => {

    internals.after(server, next);
    // server.dependency(['vision', 'inert'], internals.after(server, next));
    // next();
};

exports.register.attributes = {
    name: 'main'
};

internals.after = function (server, next) {

    server.views({
        engines:{
            jade: require('jade') 
        },
        relativeTo: __dirname,
        path: '../views/main'
    });


    // static assets

    server.route({
        method: 'GET',
        path: '/assets/{filename*}',
        handler: { 
            directory: {
                path: Path.join(__dirname, '..', '/client', '/public'),
                index: false,
                redirectToSlash: false
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        config: {
            description: 'Project root',
            handler: function (request, reply) {

                return reply.view('index');
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/sample',
        config: {
            description: 'sample ajax data',
            handler: function (request, reply) {

                return reply('boom got sample');
            }
        }
    });
    return next();
};
