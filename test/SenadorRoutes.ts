import * as mocha from 'mocha';
import * as chai from 'chai';
import ChaiHttp = require('chai-http');
import App from '../src/App'

chai.use(ChaiHttp);

const expect = chai.expect;
const should = chai.should();

describe('/GET Licitacoes', () =>{
    it('it should GET all Licitacoes', ()=>{
        chai.request(App)
            .get('/senadores')
            .then(res => {
                expect(res).to.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');                
                res.body.length.should.be.above(0);
            });
    });
});