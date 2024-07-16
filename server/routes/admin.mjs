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


//*edit course*//

adminRouter.put("/course/:id", async (req, res) => {
  const courseIdFromClient = req.params.id;
  const { coursename, description, price, coursesummary, courselearningtime } =
    req.body;

  if (
    !coursename ||
    !description ||
    !price ||
    !coursesummary ||
    !courselearningtime
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const result = await connectionPool.query(
      `UPDATE courses
       SET coursename = $2, 
           description = $3, 
           price = $4, 
           coursesummary = $5,
           courselearningtime = $6
       WHERE courseid = $1`,
      [
        courseIdFromClient,
        coursename,
        description,
        price,
        coursesummary,
        courselearningtime,
      ]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json({ message: "Course updated successfully" });
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



export default adminRouter;
