import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Provide name"]
    },
    email: {
        type: String,
        required: [true, "Provide email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Provide name"]
    },
    avatar: {
        type: String,
        default: ""
    },
    mobile: {
        type: Number,
        default: null
    },
    refresh_token: {
        type: String,
        default: ""
    },
    verify_email: {
        type: Boolean,
        default: false
    },
    last_date_login:
    {
        type: Date,
        default: "",

    },
    status:
    {
        type: String,
        enum: ['Active', 'Inactive', 'Suspended'],
        default: 'Active'
    },
    address_detail: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Address'
        }
    ],
    shopping_cart: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'cartProduct'
        }
    ],
    order_history: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'orderhistory'
        }
    ],
    otp: {
        type: String,

    },
    otpExpires: {
        type: Date,

    },
    role:
    {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    },


},
    {
        timestamps: true
    }

)


const UserModal = mongoose.model('User', userSchema);



export default UserModal;
