import mongoose from "mongoose";
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error){
       console.log("error");
       process.exit();
    }
};

export default connectDB;