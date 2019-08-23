import Web3 from 'web3';
import express from 'express';

const router = express.Router();
const web3 = new Web3('http://localhost:8545');


router.post('/', (req, res) => {
    const key = req.body.psw;


    async function create_acc(key) {
        //const test_account = await web3.eth.personal.newAccount(password);
        //const test_a = await test_account;

        const test_account = await web3.eth.accounts.privateKeyToAccount(key);

        //var pri_addr = JSON.stringify(test_account);
        var test_addr = test_account.address;
        var test_pri = test_account.privateKey;
        

        res.render('account', { addr: test_addr, private: test_pri, title: 'account' });
    }


    create_acc(key);
});

export default router;