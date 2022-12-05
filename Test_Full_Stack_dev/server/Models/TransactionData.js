import mongoose from "mongoose";

const TransactionData = new mongoose.Schema({
    data: {
        type: Object,
        required: true,
        unique: true
    }
})

export default mongoose.model('TransactionData', TransactionData)