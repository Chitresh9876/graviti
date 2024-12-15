import mongoose from "mongoose";


const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB connected successfull");
        })
        .catch((err) => {
            console.log(err.message);
    })
}

export default connectDB;