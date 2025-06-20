import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    name: {
        first:{ type : String, required: true, message: 'First name is required' },
        last: { type: String, required: true, message: 'Last name is required' }
    },
    email:{
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    company: {
        Name: { type: String, required: true, message: 'Company name is required' },
        street: {type: String},
        city: {type: String},
        state: {type: String},
        zip: {type: Number},
        country: {type: String}
    },
    profilePicture:{
        type: String,
        default: 'https://st2.depositphotos.com/9998432/48435/v/450/depositphotos_484354290-stock-illustration-default-avatar-photo-placeholder-grey.jpg'
    },
    purchased_bundle:[{
        bundle_id: { type: Schema.Types.ObjectId, ref: 'bundles' },
        duration_in_months:{ type: Number, required: true},
        purchase_date: { type: Date, default: Date.now },
        expiration_date:{ type: Date }
    }]

})

const User = models.User || model('User', UserSchema);

export default User;