import mongoose, { Schema } from 'mongoose';
const TaskSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        requires: true,
    },
    status:{
        type: String,
        requires: true,
        default:"Pending",
        enum: ['Pending','Running','Completed','Failed']
    }
}, { timestamps: true })
const TaskModel = new mongoose.model('Task', TaskSchema, 'tasks')
export default TaskModel