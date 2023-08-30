import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});
UserSchema.methods.removePass = function () {
    let obj = this.toObject();
    delete obj.password;
    return obj;
};
export const UserModel = mongoose.model('User', UserSchema);
