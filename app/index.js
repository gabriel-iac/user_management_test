import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.json';
import pg from 'pg';

let app = express();

app.server = http.createServer(app);
// logger
app.use(morgan('dev'));
app.use(express.static(__dirname + '/views'));
// 3rd party middleware
app.use(cors({
//add headers
}));

app.use(bodyParser.json({
  limit : config.bodyLimit
}));

let conString = 'postgres://username:password@localhost/my_database'
let pool = new pg.Pool()

pool.connect(conString, function (err, client, done) {  
  if (err) {
    return console.error('error fetching user from pool', err)
  }
  client.query('SELECT $1::varchar AS my_first_query', ['test'], function (err, result) {
    done()

    if (err) {
      return console.error('error happened during query', err)
    }
    console.log(result.rows[0])
    process.exit(0)
  })
})

pool.end()

app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});
