import { decodeToken } from '../config/jwt.js';
import sequelize from '../models/connect.js';
import initModels from '../models/init-models.js';


let model = initModels(sequelize);


const likeRestaurant = async (req, res) => {
  let { resId } = req.body;
  let { token } = req.headers;

  let userInfo = decodeToken(token);

  let checkLike = await model.like_res.findAll({
    where: {
      user_id: userInfo.data.checkEmail.user_id,
      res_id: resId
    }
  })

  if (checkLike.length == 0) {
    let newData = {
        res_id: resId,
        user_id: userInfo.user_id,
        date_like: new Date(),
    }
    
    await model.like_res.create(newData);

    res.send({ resId });
  }
}


const rateRestaurant = async (req, res) => {
  let { resId, amount } = req.body; 
  let { token } = req.headers;

  let userInfo = decodeToken(token);
  let { user_id } = userInfo.data.checkEmail;

  let newData = {
    res_id: resId,
    user_id: user_id,
    amount: amount,
    date_rate: new Date()
  }

  await model.rate_res.create(newData);

  res.send(amount);
}


const getLikedResByIds = async (req, res) => {
  let { resId } = req.body;
  let { token } = req.headers;

  let userInfo = decodeToken(token);
  let { userId } =  userInfo.data.checkEmail;

  let data = await model.like_res.findAll({
    where: {
      user_id: userId,
      res_id: resId,
    }
  })

  res.send(data);
}


const getRatedResByIds = async (req, res) => {
  let { resId, amount } = req.body;
  let { token } = req.headers;

  let userInfo = decodeToken(token);
  let { userId } =  userInfo.data.checkEmail;

  let data = await model.rate_res.findAll({
    where: {
      user_id: userId,
      res_id: resId,
      amount: amount
    }
  })

  res.send(data);
}




export { likeRestaurant, rateRestaurant, getLikedResByIds, getRatedResByIds }