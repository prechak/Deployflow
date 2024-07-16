import { Router } from "express";
import connectionPool from "../utils/db.mjs";
import userRegisterValidation from "../middlewares/postuser.validation.mjs";
import userLoginValidation from "../middlewares/userlogin.validation.mjs";
import { userLogin, register } from "../controllers/authcontrollers.mjs";

const userRouter = Router();

//=================Get user by id
userRouter.get("/", async (req, res) => {
  let result;
  try {
    result = await connectionPool.query(
      `select * from users order by userid asc`
    );
    res.status(200).json(result.rows);
  } catch {
    res.status(500).json({ message: `Internal Server Error` });
  }
});

//==============Register User
userRouter.post("/register", [userRegisterValidation], register);

//==============User login
userRouter.post("/login", [userLoginValidation], userLogin);

export default userRouter;
