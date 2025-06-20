import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema ({
    client_user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Client user ID is required']
    },
    assigned_to: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: [true, 'Assigned admin ID is required']
    },
    task_name:{
        type: String,
        required: [true, 'Task name is required']
    },
    task_description: {
        type: String,
        required: [true, 'Task description is required']
    },
    due_date:{
        type: Date,
        required: [true, 'Due date is required']
    },
    priority:{
        type: String,
        enum: ['low', 'medium', 'high', 'urgent'],
        default: 'medium',
        required: [true, 'Priority is required']
    },
    notes:{
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed', 'on-hold', 'cancelled'],
        default: 'pending',
        required: [true, 'Task status is required']
    },
    completed_at: {
        type: Date,
        default: null
    },
    attachments: [{
        file_name: { type: String, required: true },
        file_url: { type: String, required: true },
        uploaded_at: { type: Date, default: Date.now }
    }],
      created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const Task = models.Task || model('Task', TaskSchema);
export default Task;