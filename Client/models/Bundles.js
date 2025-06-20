import { Schema, model, models } from 'mongoose';

const BundleSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Bundle name is required']
    },
    description:{
        type: String,
        required: [true, 'Bundle description is required']
    },
    price:{
        type: Number,
        required: [true, 'Bundle price is required'],
        min: [0, 'Price cannot be negative']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    duration_in_month: {
        type: Number,
        required: [true, 'Bundle duration in months is required'],
        default: 1,
    },
    list_of_services:[{name: { type: String, required: true }, description: { type: String }}],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const Bundles = models.Bundle || model('Bundle', BundleSchema);
export default Bundles;