import express from 'express'
import mongoose from "mongoose";
import cron from 'node-cron'
import cors from 'cors';
import {transactionDetails} from "./Routes/transactionDetails.js";
import getInfoTransactions from "./Helpers/cron.js";
const app = express();


const PORT = process.env.PORT || 8080


async function start() {
    try {
        app.listen(PORT, () => {
            try {
                mongoose.connect('mongodb+srv://admin:qwerty12@cluster0.lxq65ei.mongodb.net/TransactionData?retryWrites=true&w=majority')
                    .then(() => console.log('Database started OK'))
                console.log(`Server is running on port ${PORT}`)
            } catch (err) {
                console.log('Database abort' + err)
            }

        })
    } catch (err) {
        console.log(err)
    }
}



start();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

cron.schedule('*/2  * * * *', async function() {
    await getInfoTransactions();
});
app.get('/api/transaction_info/', transactionDetails);