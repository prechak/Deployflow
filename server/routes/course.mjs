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

courseRouter.post("/:id/desire", async (req, res) => {
  const desire = {
    ...req.body,
    desiredate: new Date(),
  };
  const courseId = req.params.id;
  try {
    await connectionPool.query(
      `insert into desirecourses (courseid, desiredate)
      values ($1,$2)`,
      [courseId, desire.desiredate]
    );
  } catch {
    return res.status(400).json({
      message:
        "Server could not post because there are missing data from client",
    });
  }
  return res.status(201).json({
    message: "Desire created successfully",
  });
});

courseRouter.post("/:id/subscribe", async (req, res) => {
  const subscribe = {
    ...req.body,
    subscriptiondate: new Date(),
  };
  const courseId = req.params.id;
  try {
    await connectionPool.query(
      `insert into subscriptions (courseid, subscriptiondate)
      values ($1, $2)`,
      [courseId, subscribe.subscriptiondate]
    );
  } catch {
    return res.status(400).json({
      message:
        "Server could not post subscribe because there are missing data from client",
    });
  }
  return res.status(201).json({
    message: "Subscribe created successfully",
  });
});

courseRouter.get("/desire", async (req, res) => {
  let result;
  try {
    result = await connectionPool.query(
      `select courses.coursename, courses.description,courses.price,
       courses.coursesummary, courses.courselearningtime, courses.videofile, 
       courses.imagefile, courses.pdffile, desirecourses.courseid
      from courses
      inner join desirecourses on courses.courseid = desirecourses.courseid`
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
    return res.status(500).json({
      message: "Server could not read course because database connection",
    });
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
courseRouter.delete("/desire/:id", async (req, res) => {
  const courseId = req.params.id;
  try {
    await connectionPool.query(
      `delete from desirecourses
      where courseid=$1`,
      [courseId]
    );
  } catch {
    return res.status(500).json({
      message:
        "Server could not delete desire content because database connection",
    });
  }
  return res.status(201).json({
    message: "Deleted desire sucessfully",
  });
});

export default courseRouter;
