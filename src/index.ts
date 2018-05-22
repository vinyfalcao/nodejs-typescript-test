import app from './App'
import * as debug from 'debug';

const port = process.env.PORT || 3000

debug('ts-express:server');

app.listen(port, (err) =>{
    if(err){
        return console.log(err)
    }
    return console.log(`server is listening on ${port}`)
})