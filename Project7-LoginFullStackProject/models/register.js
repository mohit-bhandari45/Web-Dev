import mongoose from "mongoose";

const register = new mongoose.Schema({
    username:String,
    password:String,
});
export const Register = mongoose.model('Register', register);