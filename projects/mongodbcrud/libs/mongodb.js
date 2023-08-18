import mongoose from "mongoose";

const connectMongodb = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Mongodb")
    }catch (e) {
        console.error(e)
    }
}

export default connectMongodb;