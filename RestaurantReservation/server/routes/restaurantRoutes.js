import express from 'express';
import { getRestaurants, getRestaurantById, createRestaurant } from '../controllers/restaurantController.js';

const router = express.Router();

router.route('/').get(getRestaurants).post(createRestaurant);
router.route('/:id').get(getRestaurantById);

export default router;
