import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log(`Database Connected`)
    } catch (error) {
        console.log(`ERROR: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB