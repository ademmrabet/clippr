import { Schema, model, models } from 'mongoose';

const AdminSchema = new Schema({
    name: {
        first: { type : String, required: true, message: 'First name is required' },
        last: { type: String, required: true, message: 'Last name is required' }
    },
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    profilePicture: {
        type: String,
        default: 'https://st2.depositphotos.com/9998432/48435/v/450/depositphotos_484354290-stock-illustration-default-avatar-photo-placeholder-grey.jpg'
    },
    role:{
        type: String,
        enum: ['admin', 'designer', 'developer', 'sales', 'support'],
        default: 'admin',
        required: [true, 'Role is required']
    },
    phone:{
        type: String,
        required: [true, 'Phone number is required']
    },
    tasks_completed:{
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const Admin = models.Admin || model('Admin', AdminSchema);
export default Admin;