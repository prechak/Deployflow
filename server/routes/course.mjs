import { Router } from "express";
import connectionPool from "../utils/db.mjs";

const courseRouter = Router();

courseRouter.get("/", async (req, res) => {
  let result;
  try {
    result = await connectionPool.query(
      `select * from courses order by courseid asc`
    );
    res.status(200).json(result.rows);
  } catch {
    res.status(500).json({ message: `Internal server error` });
  }
});

courseRouter.get("/:id", async (req, res) => {
  const coursesId = req.params.id;
  let result;
  try {
    result = await connectionPool.query(
      `select * from courses
      where courseid=$1`,
      [coursesId]
    );
  } catch {
    return res.status(500).json({ message: "Server could not read course because database connection" });
  }
  if (!result.rows[0]) {
    return res.status(404).json({
      message: "Server could not find a requested course",
    });
  }
  return res.status(200).json({
    data: result.rows,
  });
});



//*Add course admin*//

courseRouter.post("/", async (req, res) => {
  const {
    coursename,
    price,
    description,
    coursesummary,
    courselearningtime,
    videofile,
    imagefile,
  } = req.body;

  try {
    if (!coursename || !price || !courselearningtime) {
      return res.status(400).json({
        message:
          "Missing required fields: coursename, price, or courselearningtime.",
      });
    }

    const result = await connectionPool.query(
      `
        INSERT INTO courses (coursename, price, description, coursesummary, courselearningtime, videofile, imagefile)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *`,
      [
        coursename,
        price,
        description,
        coursesummary,
        courselearningtime,
        videofile,
        imagefile,
      ]
    );

    /*if (result.rowCount === 0) {
      return res.status(404).json({ error: "Course not found" });
    }*/

    return res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Database error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

export default courseRouter;
