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
    return res.status(404).json({
      message: "Not Found: Course not found",
    });
  }
  return res.status(200).json({
    data: result.rows[0],
  });
});

export default courseRouter;
