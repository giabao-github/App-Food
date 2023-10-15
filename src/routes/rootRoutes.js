import express from 'express';
import userRoute from './userRoutes.js';
import resRoute from './resRoute.js';

const routeRoute = express.Router();

routeRoute.use('/user', userRoute);
routeRoute.use('/restaurant', resRoute);

export default routeRoute;