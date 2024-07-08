const userRegisterValidation = (req, res, next) => {
  //Fullname condition
  const nameRegex = /^[A-Za-z'-]+(?:\s[A-Za-z'-]+)*$/;
  if (!req.body.fullname) {
    return res.status(400).json({ message: "Fullname is require." });
  }
  if (!nameRegex.test(req.body.fullname)) {
    return res
      .status(400)
      .json({ message: "Special characters and numbers are not allowed." });
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
    return res.status(400).json({ message: "Age is require." });
  }
  if (isNaN(dateOfBirth)) {
    return res.status(400).json({ message: `Invalid date format for age.` });
  }
  if (dateOfBirth > currentDate) {
    return res
      .status(400)
      .json({ message: "Please provide a valid date of birth." });
  }
  if (dateOfBirth > minimumAge) {
    return res
      .status(400)
      .json({ message: "You must be at least 6 years old to register." });
  }
};

export default userRegisterValidation;
