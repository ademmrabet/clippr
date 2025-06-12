import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // Check if already connected
    if (connected){
        console.log("Already connected to the database");
        return;
    }
    // Connect to the database
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

export default connectDB;