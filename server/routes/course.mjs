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

export default courseRouter;
