import * as http from 'http'

class SenadorClient{



    public getSenadores(callback){
        var options = {
            host : "legis.senado.gov.br",
            port : "80",
            path : "/dadosabertos/senador/lista/atual",
            headers: {accept : "application/json"}
        }
        http.get(options, (res) =>{
            console.log("Status: " + res.statusCode);
            res.on('data',function(data){
                callback(data);
            });
        }).on('error', (e)=>{
            console.log("Got Error: " + e.message);
        });
    }

}
export default new SenadorClient()