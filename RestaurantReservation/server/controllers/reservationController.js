import Reservation from '../models/Reservation.js';

export const createReservation = async (req, res) => {
    try {
        const { restaurantId, userId, tableId, reservationTime, partySize } = req.body;
        const reservation = new Reservation({
            restaurantId,
            userId,
            tableId,
            reservationTime,
            partySize
        });
        const createdReservation = await reservation.save();
        res.status(201).json(createdReservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getReservationsByRestaurant = async (req, res) => {
    try {
        const reservations = await Reservation.find({ restaurantId: req.params.restaurantId });
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
