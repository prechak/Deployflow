import { Router } from "express";
import connectionPool from "../utils/db.mjs";
import userRegisterValidation from "../middlewares/postuser.validation.mjs";
import userLoginValidation from "../middlewares/userlogin.validation.mjs";
import { userLogin, register } from "../controllers/authcontrollers.mjs";

const userRouter = Router();

//=================Get all user
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

//===============Get user by id
userRouter.get("/:id", async (req, res) => {
  let result;
  const userId = req.params.id;
  try {
    result = await connectionPool.query(
      `SELECT * FROM users WHERE userid = $1`,
      [userId]
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:
        "Server could not read user because of a database connection error",
    });
  }
  if (!result.rows[0]) {
    return res.status(404).json({
      message: "Server could not find user",
    });
  }
  return res.status(200).json({
    data: result.rows[0],
  });
});

//==============Register User
userRouter.post("/register", [userRegisterValidation], register);

//==============User login
userRouter.post("/login", [userLoginValidation], userLogin);

export default userRouter;
