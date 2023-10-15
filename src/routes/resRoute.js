import express from 'express';

const resRoute = express.Router();

import { likeRestaurant, rateRestaurant, getLikedResByIds, getRatedResByIds } from '../controllers/resController.js';

resRoute.post('/like', likeRestaurant);

resRoute.post('/rate', rateRestaurant);

resRoute.get('/get-liked-res', getLikedResByIds)

resRoute.get('/get-rated-res', getRatedResByIds)


export default resRoute;
