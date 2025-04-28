import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["Service", "Produce"]
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    }
});