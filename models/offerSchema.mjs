import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["Service", "Product"],
        message: "{VALUE} is not a valid offer type."
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
        enum: ["LoDo", "Capitol Hill", "Uptown", "Golden Triangle", "Five Points"],
        message: "{VALUE} is not a valid city."
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
});

offerSchema.index({datePosted: 1});

export default mongoose.model("Offer", offerSchema);