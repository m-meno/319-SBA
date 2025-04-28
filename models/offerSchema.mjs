import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["Service", "Product"]
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
        enum: ["LoDo", "Capital Hill", "Uptown", "Golden Triangle", "Five Points"]
    }
});

export default mongoose.model("Offer", offerSchema);