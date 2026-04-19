import express from 'express';
import { createReservation, getReservationsByRestaurant } from '../controllers/reservationController.js';

const router = express.Router();

router.route('/').post(createReservation);
router.route('/restaurant/:restaurantId').get(getReservationsByRestaurant);

export default router;
