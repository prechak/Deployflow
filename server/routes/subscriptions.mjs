import { Router } from "express";
import connectionPool from "../utils/db.mjs";

const subscriptionRouter = Router();

//============Get all subscriptions
subscriptionRouter.get("/", async (req, res) => {
  try {
    const result = await connectionPool.query(`
        SELECT courses.coursename, subscriptions.*
        FROM subscriptions
        JOIN courses ON subscriptions.courseid = courses.courseid
        ORDER BY subscriptionid asc`);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error occurred while fetching subscriptions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//============Get user subscriptions and show assignments
subscriptionRouter.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await connectionPool.query(
      `SELECT 
        users.userid,
        courses.courseid, 
        courses.coursename, 
        subscriptions.subscriptionid,
        assignments.assignmentid, 
        assignments.title,
        assignments.duedate,
        modules.moduleid,
        modules.modulename,
        sublesson.sublessonid,
        sublesson.sublessonname,
        submissions.status,
        submissions.answer
      FROM 
        users
      JOIN 
        subscriptions ON subscriptions.userid = users.userid
      JOIN 
        courses ON subscriptions.courseid = courses.courseid
      JOIN 
        assignments ON courses.courseid = assignments.courseid
      JOIN
        modules ON courses.courseid = modules.courseid
      LEFT JOIN 
        sublesson ON assignments.sublessonid = sublesson.sublessonid
      LEFT JOIN
        submissions ON assignments.assignmentid = submissions.assignmentid
      WHERE 
        users.userid = $1
      ORDER BY 
        subscriptions.subscriptiondate ASC;
      `,
      [userId]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "User is not subscribed to any course yet." });
    }

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching data" });
  }
});

export default subscriptionRouter;
