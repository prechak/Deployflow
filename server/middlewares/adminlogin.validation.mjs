const adminLoginValidation = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: `Email and Password are required` });
  }
  next();
};

export default adminLoginValidation;
