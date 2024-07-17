import { Router, text } from "express";
import connectionPool from "../utils/db.mjs";

const courseRouter = Router();

//============Get all courses
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

//=============Get all user subscribed
courseRouter.get("/user/:id/subscribed", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await connectionPool.query(
      `SELECT courses.courseid, courses.coursename, courses.description, courses.coursesummary,
      courses.courselearningtime, subscriptions.subscriptiondate, courses.imagefile
      FROM courses
      JOIN subscriptions ON subscriptions.courseid = courses.courseid
      WHERE userid = $1
      ORDER BY subscriptiondate ASC`,
      [id]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "User were not subscribed to any course yet." });
    }

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching data" });
  }
});

//===========Get only user inprogress
courseRouter.get("/user/:id/inprogress", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await connectionPool.query(
      `SELECT courses.courseid, courses.coursename, courses.description, courses.coursesummary,
      courses.courselearningtime, subscriptions.subscriptiondate, subscriptions.status, courses.imagefile
      FROM courses
      JOIN subscriptions ON subscriptions.courseid = courses.courseid
      WHERE userid = $1 AND subscriptions.status = 'inprogress'
      ORDER BY subscriptiondate ASC`,
      [id]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "User were not learning to any course yet." });
    }

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the data" });
  }
});

//===========Get only user completed
courseRouter.get("/user/:id/completed", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await connectionPool.query(
      `SELECT courses.courseid, courses.coursename, courses.description, courses.coursesummary,
      courses.courselearningtime, subscriptions.subscriptiondate, subscriptions.status, courses.imagefile
      FROM courses
      JOIN subscriptions ON subscriptions.courseid = courses.courseid
      WHERE userid = $1 AND subscriptions.status = 'completed'
      ORDER BY subscriptiondate ASC`,
      [id]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "User were not completed to any course yet." });
    }

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the data" });
  }
});

//============Count inprogress and completed course each user
courseRouter.get("/user/:id/count", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await connectionPool.query(
      `SELECT 
      COUNT(CASE WHEN subscriptions.status = 'inprogress' THEN 1 END) AS inprogress_count,
      COUNT(CASE WHEN subscriptions.status = 'completed' THEN 1 END) AS completed_count
      FROM courses
      JOIN subscriptions ON subscriptions.courseid = courses.courseid
      WHERE userid = $1;`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Count complete." });
    }

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the data" });
  }
});

//=============Get all user subscribed
courseRouter.get("/user/:id/subscribed", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await connectionPool.query(
      `SELECT courses.courseid, courses.coursename, courses.description, courses.coursesummary,
      courses.courselearningtime, subscriptions.subscriptiondate, courses.imagefile
      FROM courses
      JOIN subscriptions ON subscriptions.courseid = courses.courseid
      WHERE userid = $1
      ORDER BY subscriptiondate ASC`,
      [id]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "User were not subscribed to any course yet." });
    }

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the profile" });
  }
});

courseRouter.post("/:userid/:id/subscribe", async (req, res) => {
  const subscribe = {
    ...req.body,
    subscriptiondate: new Date(),
  };
  const courseId = req.params.id;
  const userId = req.params.userid;
  try {
    await connectionPool.query(
      `insert into subscriptions (userid, courseid, subscriptiondate)
      values ($1, $2, $3)`,
      [userId, courseId, subscribe.subscriptiondate]
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

courseRouter.post("/:userid/:id/desire", async (req, res) => {
  const desire = {
    ...req.body,
    desiredate: new Date(),
  };
  const courseId = req.params.id;
  const userId = req.params.userid;
  try {
    await connectionPool.query(
      `insert into desirecourses (userid, courseid, desiredate)
      values ($1, $2, $3)`,
      [userId, courseId, desire.desiredate]
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:
        "Server could not post desire because there are missing data from client",
    });
  }
  return res.status(201).json({
    message: "Desire created successfully",
  });
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

/**Delete course admin */

courseRouter.delete("/:id", async (req, res) => {
  const courseId = req.params.id;
  try {
    const result = await connectionPool.query(
      `
      DELETE FROM courses WHERE courseid = $1
      `,
      [courseId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    return res.status(200).json({
      message: "Deleted course successfully"
    });
  } catch (error) {
    console.error("Error deleting course:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});


export default courseRouter;
