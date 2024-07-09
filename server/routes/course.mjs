import { Router } from "express";
import client from "../utils/db.mjs";

const courseRouter = Router();

courseRouter.get("/", async (req, res) => {
  let result;
  try {
    result = await client.query(`select * from courses`);
    res.status(200).json(result.rows);
  } catch {
    res.status(500).json({ message: `Internal server error` });
  }
});

export default courseRouter;
