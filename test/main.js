'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Server = require('../lib');


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.experiment;
const expect = Code.expect;
const it = lab.test;


describe('/main', () => {

    it('"/" route ok', (done) => {

        Server.init(0, (err, server) => {

            expect(err).to.not.exist();

            server.inject('/', (res) => {

                expect(res.statusCode).to.equal(200);
                server.stop(done);
            });
        });
    });

    it('"/sample" route ok', (done) => {

        Server.init(0, (err, server) => {

            expect(err).to.not.exist();

            server.inject('/sample', (res) => {

                expect(res.statusCode).to.equal(200);
                server.stop(done);
            });
        });
    });
});
