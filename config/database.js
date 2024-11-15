import mongoose from "mongoose";

const dbConnect=async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL)
       console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Connection failed",error)
    }
}
export default dbConnect;