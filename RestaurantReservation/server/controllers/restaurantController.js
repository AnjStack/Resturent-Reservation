import Restaurant from '../models/Restaurant.js';

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (restaurant) {
            res.json(restaurant);
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createRestaurant = async (req, res) => {
    try {
        const { ownerId, name, address, cuisineType, contactInfo } = req.body;
        const restaurant = new Restaurant({
            ownerId, // this would usually come from auth middleware (req.user)
            name,
            address,
            cuisineType,
            contactInfo
        });
        const createdRestaurant = await restaurant.save();
        res.status(201).json(createdRestaurant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
