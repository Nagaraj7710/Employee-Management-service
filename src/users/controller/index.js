const schemes = require('../models/mongoose');

module.exports.signIn = async (res, body) => {
  const {
    userName,
    password,
  } = body;
  const user = await schemes.User.findOne({ userName });
  if (user.password === password) {
    return res.status(201).json({ success: true, message: "Login Success" });
  }

  return res.status(400).json({
    status: 400,
    message: 'Invalid Credentials!!!',
  });
};


module.exports.getEmployees = async (res) => {
  const employees = await schemes.Employee.find()
  return res.status(201).json({ success: true, data: employees });
}

module.exports.addEmployee = async (res, body) => {
  const {
    employeeData
  } = body;
  try {
    const createdEmployee = await schemes.Employee.create(employeeData);
    return res.status(201).json({ success: true, message: "Successfully added", createdEmployee });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      message: 'Something went wrong!!!',
    });
  }
}