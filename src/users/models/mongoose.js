const mongoose = require('../../../services/mongoose');

const User = mongoose.model(
  'User',
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  'users'
);

const Employee = mongoose.model(
  'Employee',
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    createdDate: {
      type: String,
      required: true,
    },
  },
  'employees'
);

module.exports = {
  User,
  Employee
};
