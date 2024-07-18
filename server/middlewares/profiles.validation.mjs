const updateProfileValidation = (req, res, next) => {
  const { fullname, educationalbackground, email } = req.body;

  if (!fullname || !educationalbackground || !email) {
    return res.status(400).json({
      message: "Fullname, educational background, and email cannot be empty",
    });
  }

  next();
};

export default updateProfileValidation;
