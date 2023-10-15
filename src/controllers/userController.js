import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { createToken, decodeToken } from "../config/jwt.js";

let model = initModels(sequelize);

const orderFood = async (req, res) => {
  let { foodId, amount, orderCode } = req.body;
  let { token } = req.headers;

  let userInfo = decodeToken(token);
  let { userId } = userInfo.data.checkEmail;

  let data = {
    user_id: userId,
    food_id: foodId,
    amount: amount,
    order_code: orderCode
  }

  await model.orders.create(data);

  res.send(data);
}

export { orderFood } 