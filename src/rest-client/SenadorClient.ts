import * as request from 'request'

class SenadorClient {
    public getSenadores(callback) {
        request('http://legis.senado.gov.br/dadosabertos/senador/lista/atual',
            { json: true },
            (err, res, body) => {
                if (err) {
                    console.log(err);
                    return console.log(err);
                }
                callback(body);
            });
    }
}
export default new SenadorClient()