import connectionPool from "../utils/db.mjs";
import bcrypt from "bcrypt";

const userRegisterValidation = async (req, res, next) => {
  //Fullname condition
  const nameRegex = /^[A-Za-z'-]+(?:\s[A-Za-z'-]+)*$/;
  if (!req.body.fullname) {
    return res.status(400).json({ message: `Fullname is require.` });
  }
  if (!nameRegex.test(req.body.fullname)) {
    return res
      .status(400)
      .json({ message: `Special characters and numbers are not allowed.` });
  }

  //Age condition
  const dateOfBirth = new Date(req.body.age);
  const currentDate = new Date();
  const minimumAge = new Date(
    currentDate.getFullYear() - 6,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  if (!req.body.age) {
    return res.status(400).json({ message: `Age is require.` });
  }
  if (isNaN(dateOfBirth)) {
    return res.status(400).json({ message: `Invalid date format for age.` });
  }
  if (dateOfBirth > currentDate) {
    return res
      .status(400)
      .json({ message: `Please provide a valid date of birth.` });
  }
  if (dateOfBirth > minimumAge) {
    return res
      .status(400)
      .json({ message: `You must be at least 6 years old to register.` });
  }

  //Education condition
  if (!req.body.educationalbackground) {
    return res
      .status(400)
      .json({ message: `Educational Background is require` });
  }

  if (req.body.educationalbackground.length > 125) {
    return res.status(400).json({
      message: `Educational background should not exceed 125 characters.`,
    });
  }

  //Email condition
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!req.body.email) {
    return res.status(400).json({ message: `Email is require` });
  }
  if (!emailRegex.test(req.body.email)) {
    return res.status(400).json({ message: `Invalid email format` });
  }

  const { rows } = await connectionPool.query(
    `select * from users where email = $1`,
    [req.body.email]
  );
  if (rows.length > 0) {
    return res.status(409).json({ message: "Email already exists" });
  }

  //Password condition
  if (!req.body.password) {
    return res.status(400).json({ message: `Password is require` });
  }

  if (req.body.password.length < 12) {
    return res
      .status(400)
      .json({ message: `Password must be longer than 12 characters.` });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  // Next
  next();
};

export default userRegisterValidation;
