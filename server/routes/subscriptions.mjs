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

export default subscriptionRouter;
