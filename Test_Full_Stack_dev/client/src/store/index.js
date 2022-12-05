// Core
import { configureStore } from '@reduxjs/toolkit';
// Reducers
import transactions from "../redusers/dataTransactionsSlice";
export default configureStore({
    reducer: {
        dataTransactionSlice:   transactions,
    },
});
