// Import the necessary modules
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Path to your server file
const expect = chai.expect;

// Tell Chai to use chaiHttp for http requests
chai.use(chaiHttp);

describe('Server', () => {
    it('should return Hello World on / GET', done => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello World');
                done();
            });
    });
});