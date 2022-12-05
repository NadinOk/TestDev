import {transactionApi} from "../api/transactionApi";
import {setTransactionFullData} from "../redusers/dataTransactionsSlice";

export const transactionActions = {
    getTransactionData: (data) => (dispatch) => {
        console.log(data)
    try {
        transactionApi
            .getTransactionData(data)
            .then((res) => {
                console.log(res)
                // console.log(res.data)
                dispatch(setTransactionFullData(res.data))
                // dispatch(setMyTherapist(res.data.my_therapists))
            })
            .catch((error) => {
                console.log('profileApi getTransactionData', error)
            })
    } catch (error) {
        console.log('getTransactionData', error)
    }
}}