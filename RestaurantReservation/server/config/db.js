import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connUrl = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/restaurant_res";
        const conn = await mongoose.connect(connUrl);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
