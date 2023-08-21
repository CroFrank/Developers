import mongoose from "mongoose";
const DevSchema = new mongoose.Schema({
    name: String,
    skills: [String],
    location: String,
    age: Number
}, { timestamps: true });
export const DevModel = mongoose.model('Dev', DevSchema);
