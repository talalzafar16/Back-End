const mongoose=require('mongoose');
const UserSignUpSchema= mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    contact: String,
    dob: String,
})

const userModel = mongoose.model("Users",UserSignUpSchema)

module.exports = userModel;