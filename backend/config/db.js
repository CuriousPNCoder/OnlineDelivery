import mongoose from "mongoose";

export const connectDB = async () =>{
// await mongoose.connect('add-db-link/food-delivery').then(()=>console.log("DB connected"));
await mongoose.connect('addconnection/food-delivery').then(()=>console.log("DB connected"));

}