import axios from 'axios';
import  ethers from 'ethers';
import * as dotenv from 'dotenv'
import TransactionData from "../Models/TransactionData.js";
dotenv.config()

 const getInfoTransactions =  () => {
    axios.get(`https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=NF68PW9MP8XPC31E1VAJ1DJSAFVIVKXZR1`)
        .then(function (response) {
            console.log(response.data.result)
            setTimeout(() => {
                // console.log(response)
                axios.get(`https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${response.data.result}&boolean=true&apikey=NF68PW9MP8XPC31E1VAJ1DJSAFVIVKXZR1`)
                    .then( (response) => {
                        // console.log(response)

                        console.log(response.data)
                        new TransactionData({data: response.data.result}).save().then(r => {
                            console.log('rrrrrr', r)
                            return r
                        })
                        // const resul = saveData.save()
                        // console.log(saveData)
                        // return saveData
                    }).catch( (error) => {
                    console.log('Method save abort with error', error );
                })
                    .catch( (error) => {
                        console.log('Method getBlockByNumber abort with error', error );
                    })
            }, 5000)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
// const cron = async () => {
//     const events = await subs.getNotificationEvents()
//     if (events) {
//         for (const item of events) {
//             await sendNotifEmail(item.dataValues)
//             await subs.setNotifSend(item.id)
//         }
//     }
// }

export default getInfoTransactions