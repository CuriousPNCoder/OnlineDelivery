import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://paramitanandi:paramita1234@cluster0.e4qaf.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
}