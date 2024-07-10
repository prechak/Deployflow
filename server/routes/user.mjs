import { Router } from "express";
import connectionPool from "../utils/db.mjs";
import userRegisterValidation from "../middlewares/postuser.validation.mjs";
import loginValidation from "../middlewares/login.validation.mjs";
<<<<<<< HEAD
=======

>>>>>>> 2272c6e (edit: add login middleware)
import jwt from "jsonwebtoken";

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

<<<<<<< HEAD
// user login
=======
// login
>>>>>>> 2272c6e (edit: add login middleware)
userRouter.post("/login", [loginValidation], async (req, res) => {
  console.log("SECRET_KEY: ", process.env.SECRET_KEY);
  console.log("Request Body: ", req.body);
  const { email } = req.body;

  try {
    console.log(`Attempting to log in with email: ${email}`);

    const result = await connectionPool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    // generate token
    const user = result.rows[0];
    const token = jwt.sign(
      { userId: user.userid, fullname: user.fullname, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "900000" } // 15 minutes
    );

    return res.status(200).json({
      message: "Login successful",
      token: token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default userRouter;
