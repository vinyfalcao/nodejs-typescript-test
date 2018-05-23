import Licitacoes from '../src/routes/Licitacoes';
import * as mocha from 'mocha';
import * as chai from 'chai';
import ChaiHttp = require('chai-http');
import App from '../src/App'

chai.use(ChaiHttp);

const expect = chai.expect;

describe('/GET Licitacoes', () =>{
    it('it should GET all Licitacoes', ()=>{
        chai.request(App)
            .get('/licitacoes')
            .then(res => {
                expect(res.type).to.eql('application/json');
                //expect(res.body).to.eql({id: 1, name : "Teste"});
            });
    });
});