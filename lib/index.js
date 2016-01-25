'use strict';

// Load modules
// Thanks to @apoorvakorde for re-writing this script
// and kick starting this.

const Hapi = require('hapi');
const Version = require('./version');
const Vision = require('vision');
const Inert = require('inert');
const Main = require('./main');

// Declare internals

const internals = {};

exports.init = function (port, next) {

    const server = new Hapi.Server();
    server.connection({     // both host and port must match cors setting in api. 
        host: 'localhost',  // host 
        port: port          // port 
    });

    server.register([Vision, Inert, Version, Main], (err) => {

        if (err) {
            return next(err);
        }

        server.start((err) => {

            return next(err, server);
        });
    });
};
