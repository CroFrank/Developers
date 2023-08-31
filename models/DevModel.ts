import mongoose from "mongoose";

const DevSchema = new mongoose.Schema({
    name: String,
    age: Number,
    location: String,
    skills: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true }
)

export const DevModel = mongoose.model('Dev', DevSchema);

