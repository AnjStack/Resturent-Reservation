import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    tableIdentifier: { type: String, required: true },
    capacity: { type: Number, required: true },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Table', tableSchema);
