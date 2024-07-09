import { Router } from "express";
import connectionPool from "../utils/db.mjs";
import userRegisterValidation from "../middlewares/postuser.validation.mjs";

const userRouter = Router();

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

userRouter.post("/register", [userRegisterValidation], async (req, res) => {
  const newUser = { ...req.body };
  const query = `insert into users (fullname, age, educationalbackground, email, password, role)
                values($1, $2, $3, $4, $5, $6)
                returning *`;
  const values = [
    newUser.fullname,
    newUser.age,
    newUser.educationalbackground,
    newUser.email,
    newUser.password,
    newUser.role,
  ];
  console.log(newUser);
  try {
    await connectionPool.query(query, values);
    return res.status(201).json({ message: "Registration successful!" });
  } catch {
    return res.status(500).json({ message: `Internal Server Error` });
  }
});

export default userRouter;
