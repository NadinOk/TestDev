// Constants
import axios from 'axios'

export const transactionApi = {
    getTransactionData: async (data) => {
        console.log(data)
    return axios({
        method: 'get',
        url: `http://localhost:8080/api/transaction_info`,
        headers: { 'Content-Type': 'application/json' },
        data
    })
}}