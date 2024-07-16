import connectionPool from "../utils/db.mjs";
import bcrypt from "bcrypt";

const userLoginValidation = async (req, res, next) => {
  const { email, password } = req.body;

  // const result = await connectionPool.query(
  //   `SELECT * FROM users WHERE email = $1`,
  //   [email]
  // );

  // // Check Email
  // const user = result.rows[0];
  // if (result.rows.length === 0) {
  //   return res.status(404).json({ message: "Invalid Email" });
  // }

  // // Check Password
  // const isValidPassword = await bcrypt.compare(password, user.password);
  // if (!isValidPassword) {
  //   return res.status(400).json({ message: "Invalid Password" });
  // }
  // Next
  next();
};

export default userLoginValidation;
