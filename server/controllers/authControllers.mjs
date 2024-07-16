import connectionPool from "../utils/db.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//=====================User Register
export const register = async (req, res) => {
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
};

//=====================User Login
export const userLogin = async (req, res) => {
  console.log("SECRET_KEY: ", process.env.SECRET_KEY);
  console.log("Request Body: ", req.body);
  const { email, password } = req.body;
  try {
    const result = await connectionPool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    // Check Email
    const user = result.rows[0];
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Invalid Email" });
    }

    // Check Password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    // generate token
    const token = jwt.sign(
      { userId: user.userid, fullname: user.fullname, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "90000" } // 15 minutes
    );

    return res.status(200).json({
      message: "Login successful",
      token: token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
