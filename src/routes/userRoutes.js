import express from 'express';

const userRoute = express.Router();

import { orderFood } from '../controllers/userController.js';

userRoute.post('/order', orderFood);

export default userRoute;
