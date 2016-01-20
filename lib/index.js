'use strict';

// Load modules
// Thanks to @apoorvakorde for re-writing this script
// and kick starting this.

const Hapi = require('hapi');
const Version = require('./version');


// Declare internals

const internals = {};

exports.init = function (port, next) {

    const server = new Hapi.Server();
    server.connection({ port: port });

    server.register(Version, (err) => {

        if (err) {
            return next(err);
        }

        server.start((err) => {

            return next(err, server);
        });
    });
};
