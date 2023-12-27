const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONDB_URI)
    } catch (err) {
        console.log(err)
    }
}