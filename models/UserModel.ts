import mongoose from "mongoose";

const UserSchema = new mongoose.Schema<User>({
    name: String,
    password: String,
    email: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

interface User extends Document {
    name: string;
    password: string;
    email: string;
    role: 'user' | 'admin';
    removePass: () => UserWithoutPassword;
}

interface UserWithoutPassword {
    name: string;
    email: string;
    role: 'user' | 'admin';
}

UserSchema.methods.removePass = function () {
    let obj = this.toObject()
    delete obj.password
    return obj
}

export const UserModel = mongoose.model('User', UserSchema);

