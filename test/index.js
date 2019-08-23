import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs';
import ScatterETH from '@scatterjs/web3';
import Accounts from 'web3-eth-accounts';
import express from 'express';
import router from './router/main';
import add from './router/add';
import bodyParser from 'body-parser';


var app = express();


app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));

app.use('/', router);
app.use('/add', add);


var server = app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});