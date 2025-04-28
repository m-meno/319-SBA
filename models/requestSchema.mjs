import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["Product", "Service"],
        message: "{VALUE} is not a valid request type."
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        enum: ["LoDo", "Capital Hill", "Uptown", "Golden Triangle", "Five Points"],
        message: "{VALUE} is not a valid city."
    },
    datePosted: {
        type: Date,
        required: true,
        default: Date.now
    }

});

requestSchema.index({datePosted: 1 });

export default mongoose.model("Request", requestSchema);