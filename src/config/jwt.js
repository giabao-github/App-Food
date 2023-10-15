import jwt from 'jsonwebtoken';


const createToken = (data) => {
  return jwt.sign({ data }, "FOOD_APP", { algorithm: "HS256", expiresIn: "5y" });
}


const checkToken = (token) => {
  return jwt.verify(token, "FOOD_APP");
}


const decodeToken = (token) => {
  return jwt.decode(token);
}


const lockAPI = (req, res, next) => {
  try {
    let { token } = req.headers;

    checkToken(token);
    next();
  }
  catch (exception) {
    res.status(401).send("Access denied!");
  }
}


export {
  createToken,
  checkToken,
  decodeToken,
  lockAPI
}