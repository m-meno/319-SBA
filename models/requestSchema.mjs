import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["Product", "Service"]
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        enum: ["LoDo", "Capital Hill", "Uptown", "Golden Triangle", "Five Points"]
    },

});

export default mongoose.model("Request", requestSchema);