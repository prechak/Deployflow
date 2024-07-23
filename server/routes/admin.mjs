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

//*get lesson(modules)*//
adminRouter.get("/lesson", async (req, res) => {
  try {
    const result = await connectionPool.query(
      `SELECT * FROM modules `
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error occurred while fetching sublesson:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//*get sublesson all*//
adminRouter.get("/sublesson", async (req, res) => {
  try {
    const result = await connectionPool.query(
      `SELECT * FROM sublesson`
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error occurred while fetching sublesson:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//*get assignment all//
adminRouter.get("/assignments", async (req, res) => {
  try {
    const result = await connectionPool.query(
      `SELECT * FROM assignments`
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error occurred while fetching assignments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//*post addsignments(add)*//
adminRouter.post("/assignments", async (req, res) => {
  const { 
    course,
    lesson,
    sub_lesson,
    title,
    duedate
  } = req.body;

  if (!course || !lesson || !sub_lesson || !title) {
    return res.status(400).json({ error: "All fields except due date are required" });
  }

  let finalDueDate;
  if (!duedate) {
    const today = new Date();
    const defaultDurationDays = 7;
    finalDueDate = new Date(today.setDate(today.getDate() + defaultDurationDays)).toISOString().split('T')[0];
  } else {
    const durationDays = parseInt(duedate.split(' ')[0]);
    if (isNaN(durationDays)) {
      return res.status(400).json({ error: "Invalid duration value" });
    }
    const today = new Date();
    finalDueDate = new Date(today.setDate(today.getDate() + durationDays)).toISOString().split('T')[0];
  }

  try {
    const result = await connectionPool.query(
      `INSERT INTO assignments (submoduleid, lessonid, sublessonid, title, duedate)
       VALUES ($1, $2, $3, $4, $5)`,
      [
        course,
        lesson,
        sub_lesson,
        title,
        finalDueDate 
      ]
    );
    res.status(201).json({ message: "Assignment created successfully" });
  } catch (error) {
    console.log(error);
    console.error("Error occurred while saving the assignment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//*get addsignments by id//
adminRouter.get("/assignments/:id", async (req, res) => {
  const assignmentid = req.params.id;
  let result;
  
  try {
    result = await connectionPool.query(
      `SELECT * FROM assignments WHERE assignmentid = $1`,
      [assignmentid]
    );
  } catch (error) {
    console.error("Error occurred while fetching the assignment:", error);
    return res.status(500).json({
      message: "Server could not read assignments due to database connection error",
    });
  }

  if (result.rows.length === 0) { 
    return res.status(404).json({
      message: "Assignment not found",
    });
  }

  return res.status(200).json({
    data: result.rows[0], 
  });
});




//addLesson and sublesson
adminRouter.post("/:courseid/lesson", async (req, res) => {
  const lesson = {
    ...req.body,
    sublessondate: new Date(),
  };
  const courseId = req.params.courseid;
  try {
    await connectionPool.query(
      `
      with lesson as (
      insert into modules (courseid, modulename) values ($1,$2) 
      returning *)
      insert into sublesson (moduleid, sublessonname, videofile, sublessondate)
      select lesson.moduleid, $3, $4, $5 from lesson
      `,
      [
        courseId,
        lesson.modulename,
        lesson.sublessonname,
        lesson.videofile,
        lesson.sublessondate,
      ]
    );
    return res.status(201).json({
      message: "Lesson created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:
        "Server could not created lesson because there are missing data from client",
    });
  }
});

export default adminRouter;
