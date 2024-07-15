import { Router } from "express";
import connectionPool from "../utils/db.mjs";
import adminLoginValidation from "../middlewares/adminlogin.validation.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const adminRouter = Router();

adminRouter.post("/login", [adminLoginValidation], async (req, res) => {
  try {
    const { email, password } = req.body;

    const { rows } = await connectionPool.query(
      `select * from users where email = $1`,
      [email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Email does not exist." });
    }

    const user = rows[0];

    if (user.role.toLowerCase() !== "admin") {
      return res.status(401).json({ message: "Only admin can access" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password." });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      { id: user.userid, email: user.email, role: user.role },
      secretKey,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({ message: "Login successful.", token });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

export default adminRouter;
