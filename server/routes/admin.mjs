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

adminRouter.get("/assignments/list", async (req, res) => {
  try {
    const result = await connectionPool.query(
      "select assignmentid,submodules.title, assignments.title as detail,sublessonname,modulename,assignments.createddate from assignments inner join submodules on submodules.submoduleid = assignments.submoduleid inner join sublesson on sublesson.sublessonid = assignments.sublessonid inner join modules on modules.moduleid = assignments.lessonid;"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching assignments:", error);

    res.status(500).json({ message: "Internal Server Error" });
  }
});

//*get lesson(modules)*//
adminRouter.get("/lesson", async (req, res) => {
  try {
    const result = await connectionPool.query(`SELECT * FROM modules `);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error occurred while fetching sublesson:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

adminRouter.get("/lesson/:id", async (req, res) => {
  const lessonId = req.params.id;
  let result;
  try {
    result = await connectionPool.query(
      `select * from modules
      where moduleid=$1 `,
      [lessonId]
    );
  } catch {
    return res.status(500).json({
      message: "Server could not read lesson because database connection",
    });
  }
  if (!result.rows[0]) {
    return res.status(404).json({
      message: "Server could not find a requested lesson",
    });
  }
  return res.status(200).json({
    data: result.rows,
  });
});

adminRouter.delete("/lesson/:id", async (req, res) => {
  const lessonId = req.params.id;
  try {
    await connectionPool.query(
      `delete from modules
      where moduleid=$1`,
      [lessonId]
    );
    await connectionPool.query(
      `delete from sublesson
      where moduleid=$1`,
      [lessonId]
    );
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Server could not delete lesson because database connection",
    });
  }
  return res.status(201).json({
    message: "Deleted lesson sucessfully",
  });
});
//*get sublesson all*//
adminRouter.get("/sublesson", async (req, res) => {
  try {
    const result = await connectionPool.query(`SELECT * FROM sublesson`);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error occurred while fetching sublesson:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

adminRouter.delete("/sublesson/:id", async (req, res) => {
  const sublessonId = req.params.id;
  try {
    await connectionPool.query(
      `delete from sublesson
      where sublessonid=$1`,
      [sublessonId]
    );
  } catch {
    return res.status(500).json({
      message: "Server could not delete sublesson because database connection",
    });
  }
  return res.status(201).json({
    message: "Deleted sublesson sucessfully",
  });
});

adminRouter.put("/sublesson/:lessonid", async (req, res) => {
  const lessonId = req.params.lessonid;
  const newSublesson = {
    ...req.body,
    sublessondate: new Date(),
  };
  // console.log(newSublesson)
  const editLesson = req.body[0];
  const editSublesson = req.body[1];
  // console.log(editLesson)
  // console.log(editSublesson)
  try {
    await connectionPool.query(
      `update modules
      set modulename=$2
      where moduleid=$1
      returning *`,
      [lessonId, editLesson.modulename]
    );
    editSublesson.forEach(async (value, i) => {
      console.log(value)
      try {
        await connectionPool.query(
          `insert into sublesson (sublessonid, moduleid, sublessonname, videofile, sublessondate)
           values ($1, $2, $3, $4, $5)
           ON CONFLICT (sublessonid) DO UPDATE SET
           moduleid=EXCLUDED.moduleid,
           sublessonname=EXCLUDED.sublessonname,
           videofile=EXCLUDED.videofile,
           sublessondate=EXCLUDED.sublessondate `,

          [
            value.sublessonid,
            lessonId,
            value.sublessonname,
            value.videofile,
            value.sublessondate,
          ]
        );
      } catch (error) {
        console.log(error);
      }
    });
    
  } catch {
    return res.status(500).json({
      message: "Server could not put sublesson because database connection",
    });
  }
  return res.status(201).json({
    message: "Put sublesson sucessfully",
  });
});

adminRouter.get("/sublesson/:lessonid", async (req, res) => {
  const LessonId = req.params.lessonid;
  let result;
  try {
    result = await connectionPool.query(
      `select * from sublesson
      where moduleid=$1 `,
      [LessonId]
    );
  } catch {
    return res.status(500).json({
      message: "Server could not read lesson because database connection",
    });
  }
  if (!result.rows[0]) {
    return res.status(404).json({
      message: "Server could not find a requested lesson",
    });
  }
  return res.status(200).json({
    data: result.rows,
  });
});

//*get assignment all//
adminRouter.get("/assignments", async (req, res) => {
  try {
    const result = await connectionPool.query(`
      SELECT 
        a.assignmentid,
        a.title,
        a.description,
        a.duedate,
        a.courseid,
        c.coursename,
        a.moduleid,
        m.modulename,
        a.sublessonid,
        s.sublessonname,
        a.createddate
      FROM 
        assignments a
      LEFT JOIN 
        courses c ON a.courseid = c.courseid
      LEFT JOIN 
        modules m ON a.moduleid = m.moduleid
      LEFT JOIN 
        sublesson s ON a.sublessonid = s.sublessonid
    `);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error occurred while fetching assignments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//*post assignments(add)*//
adminRouter.post("/assignments", async (req, res) => {
  const { 
    course,
    lesson,
    sub_lesson,
    title,
    duedate
  } = req.body;

  if (!course || !lesson || !sub_lesson || !title) {
    return res
      .status(400)
      .json({ error: "All fields except due date are required" });
  }

  let finalDueDate;
  if (!duedate) {
    const today = new Date();
    const defaultDurationDays = 7;
    finalDueDate = new Date(
      today.setDate(today.getDate() + defaultDurationDays)
    )
      .toISOString()
      .split("T")[0];
  } else {
    const durationDays = parseInt(duedate.split(" ")[0]);
    if (isNaN(durationDays)) {
      return res.status(400).json({ error: "Invalid duration value" });
    }
    const today = new Date();
    finalDueDate = new Date(today.setDate(today.getDate() + durationDays))
      .toISOString()
      .split("T")[0];
  }

  try {
    const result = await connectionPool.query(
      `INSERT INTO assignments (courseid, moduleid, sublessonid, title, duedate)
       VALUES ($1, $2, $3, $4, $5)`,
      [course, lesson, sub_lesson, title, finalDueDate]
    );
    res.status(201).json({ message: "Assignment created successfully" });
  } catch (error) {
    console.log(error);
    console.error("Error occurred while saving the assignment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//*get assignments by id//
adminRouter.get("/assignment/:id", async (req, res) => {
  const assignmentid = parseInt(req.params.id, 10);

  if (isNaN(assignmentid)) {
    return res.status(400).json({
      message: "Invalid assignment ID",
    });
  }

  try {
    const result = await connectionPool.query(
      `SELECT * FROM assignments WHERE assignmentid = $1`,
      [assignmentid]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }

    return res.status(200).json({
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error occurred while fetching the assignment:", error);
    return res.status(500).json({
      message: "Server could not read assignments due to database connection error",
    });
  }
});




//*edit assignments 
adminRouter.put("/assignments/:id", async (req, res) => {
  const { id } = req.params;
  const { course, lesson, sub_lesson, title, duedate } = req.body;
  if (!course || !lesson || !sub_lesson || !title) {
    return res
      .status(400)
      .json({ error: "All fields except due date are required" });
  }

  let finalDueDate;
  if (!duedate) {
    const today = new Date();
    const defaultDurationDays = 7;
    finalDueDate = new Date(today.setDate(today.getDate() + defaultDurationDays))
      .toISOString()
      .split("T")[0];
  } else {
    const durationDays = parseInt(duedate.split(" ")[0], 10);
    if (isNaN(durationDays)) {
      return res.status(400).json({ error: "Invalid duration value" });
    }
    const today = new Date();
    finalDueDate = new Date(today.setDate(today.getDate() + durationDays))
      .toISOString()
      .split("T")[0];
  }

  try {
    const result = await connectionPool.query(
      `UPDATE assignments
       SET courseid = $1, 
           moduleid = $2, 
           sublessonid = $3, 
           title = $4, 
           duedate = $5
       WHERE assignmentid = $6`,
      [course, lesson, sub_lesson, title, finalDueDate, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Assignment not found" });
    }

    res.status(200).json({ message: "Assignment updated successfully" });
  } catch (error) {
    console.error("Error occurred while updating the assignment:", error);
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
      message:
        "Server could not read assignments due to database connection error",
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


//*edit assignments 
adminRouter.put("/assignment/:id", async (req, res) => {
  const assignmentid = req.params.id;
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
      `UPDATE assignments
       SET submoduleid = $1, lessonid = $2, sublessonid = $3, title = $4, duedate = $5
       WHERE assignmentid = $6`,
      [
        course,
        lesson,
        sub_lesson,
        title,
        finalDueDate,
        assignmentid
      ]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.status(200).json({ message: "Assignment updated successfully" });
  } catch (error) {
    console.error("Error occurred while updating the assignment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//addLesson and sublesson
adminRouter.post("/:courseid/lesson", async (req, res) => {
  const sublessondate = new Date();
 
  let newModule;
  const courseId = req.params.courseid;
  try {
    newModule = await connectionPool.query(
      `insert into modules (courseid, modulename) values ($1,$2) 
      returning *`,
      [courseId, req.body.modulename]
    );
    console.log(req.body)
    req.body.sublessonname.forEach(async (value, i) => {
      
      try {
        await connectionPool.query(
          `
          insert into sublesson (moduleid, sublessonname, videofile, sublessondate)
          values ($1,$2, $3, $4)
          `,
          [newModule.rows[0].moduleid, value, req.body.videos[i], sublessondate]
        );

      } catch (error) {
        console.log(error);
      }
    });

    // await connectionPool.query(
    //   `
    //   with lesson as (
    //   insert into modules (courseid, modulename) values ($1,$2)
    //   returning *)
    //   insert into sublesson (moduleid, sublessonname, videofile, sublessondate)
    //   select lesson.moduleid, $3, $4, $5 from lesson
    //   `,
    //   [
    //     courseId,
    //     lesson.modulename,
    //     lesson.sublessonname,
    //     lesson.videofile,
    //     lesson.sublessondate,
    //   ]
    // );
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

//Delete assignments

adminRouter.delete("/assignments/:id", async (req, res) => {
  const assignmentId = req.params.id;
  try {
    const result = await connectionPool.query(
      `
      DELETE FROM assignments WHERE assignmentid = $1
      `,
      [assignmentId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Assignment not found" });
    }

    return res.status(200).json({
      message: "Deleted assignment successfully",
    });
  } catch (error) {
    console.error("Error deleting assignment:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

//Get Sub lesson list
adminRouter.get("/sublessonlist", async (req, res) => {
  try {
    const result = await connectionPool.query(`select modulename as lessonname,modules.moduleid,sublessonname,sublessonid from modules 
inner join sublesson on modules.moduleid = sublesson.moduleid; `);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error occurred while fetching lesson and sublesson:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Get modules-sublesson list from id
adminRouter.get("/sublessonlist/:id", async (req, res) => {
  const moduleId = req.params.id
  try {
    const result = await connectionPool.query(`select modulename as lessonname,modules.moduleid,sublessonname,sublessonid from modules 
inner join sublesson on modules.moduleid = sublesson.moduleid
where sublesson.sublessonid = $1`,[moduleId]);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error occurred while fetching lesson and sublesson:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



export default adminRouter;
