import Web3 from 'web3';
import express from 'express';

const router = express.Router();
const web3 = new Web3('http://localhost:8545');


router.post('/', (req, res) => {
    const password = req.body.psw;

    async function create_acc(password) {
        const test_account = await web3.eth.personal.newAccount(password);

        //var test_a = JSON.stringify(test_account);
        //var private_key = test_account.address;
        //web3.eth.defaultAccount = private_key;
        const test_a = await test_account;

        res.render('account', { acc: test_a, title: 'account' });
    }

    create_acc(password);
});

export default router;