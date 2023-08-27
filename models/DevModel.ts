import mongoose from "mongoose";

const DevSchema = new mongoose.Schema({
    name: String,
    age: Number,
    location: String,
    skills: [String]
}, { timestamps: true }
)

export const DevModel = mongoose.model('Dev', DevSchema);

