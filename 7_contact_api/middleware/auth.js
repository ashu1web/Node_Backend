import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const isAthenticated = async (req, res, next) => {
  const token = req.header("Auth");

  // console.log("check token = ",token)

  if (!token) return res.json({ message: "Login first" });

  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const id = decoded.userId;                                 //In login controller saved as userId

  let user = await User.findById(id);

  if (!user) return res.json({ message: "Invalid User found through token checking" });

  req.user = user;

  next();
};

//In middleware, req.user typically contains the authenticated user's information, 
//but only if your application explicitly sets it — usually after validating a token or session.(see user login controller)