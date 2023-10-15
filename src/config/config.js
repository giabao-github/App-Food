import dotenv from 'dotenv';
dotenv.config();


export default {
    host: process.env.FOOD_HOST,
    database: process.env.FOOD_DATABASE,
    userName: process.env.FOOD_USERNAME,
    pass: process.env.FOOD_PASS,
    port: process.env.FOOD_PORT,
    dialect: process.env.FOOD_DIALECT,
}