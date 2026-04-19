import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
    reservationTime: { type: Date, required: true },
    partySize: { type: Number, required: true },
    duration: { type: Number, default: 60 },
    specialRequests: { type: String },
    status: { 
        type: String, 
        enum: ['pending', 'confirmed', 'cancelled', 'completed'], 
        default: 'pending' 
    }
}, { timestamps: true });

export default mongoose.model('Reservation', reservationSchema);
