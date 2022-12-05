import TransactionData from '../Models/TransactionData.js'


export const transactionDetails = async (req, res) => {
    // console.log('req', req.query)
    const allTrans = await TransactionData.find(req.query)
    // console.log('dsdbd')
    res.send(allTrans)
}