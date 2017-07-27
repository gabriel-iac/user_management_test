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

app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});
