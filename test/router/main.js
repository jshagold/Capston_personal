import Web3 from 'web3';
import express from 'express';

var router = express.Router();
var web3 = new Web3('http://localhost:8545');



router.get('/', async (req, res) => {

    async function getData() {
            const accounts = await web3.eth.getAccounts();
            res.render('main', { title: 'main', acc: accounts });
    }
    getData();

});




export default router;