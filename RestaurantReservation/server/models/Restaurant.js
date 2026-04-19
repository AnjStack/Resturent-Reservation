import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String },
    address: { type: String, required: true },
    cuisineType: { type: String },
    contactInfo: { type: String },
    operatingHours: {
        open: { type: String, default: "09:00" },
        close: { type: String, default: "22:00" }
    },
    images: [{ type: String }],
    averageRating: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Restaurant', restaurantSchema);
