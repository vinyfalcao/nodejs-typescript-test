import Licitacoes from '../src/routes/Licitacoes';
import expect from 'chai';
import ChaiHttp from 'chai-http'
import 'mocha';
import App from '../src/App'

chai.use(ChaiHttp);

describe('/GET Licitacoes', () =>{
    it('it should GET all Licitacoes', (done)=>{
        chai.request(App)
            .get('/licitacoes')
            .end((err, res)=>{
                res.should.have.status(200);
                res.body.should.be.a('Object');
            });
    });
});