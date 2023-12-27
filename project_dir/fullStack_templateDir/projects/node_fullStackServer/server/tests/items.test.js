const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Path to your server file
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /items', () => {
    it('should get all items', done => {
        chai.request(server)
            .get('/items')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                done();
            });
    });
});