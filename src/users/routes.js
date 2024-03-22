const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.post(
  '/signin',
  (req, res) => {
    controller.signIn(res, req.body);
  }
);
router.get(
  '/employee-list',
  (req, res) => {
    controller.getEmployees(res);
  }
);
router.post(
  '/add-employee',
  (req, res) => {
    controller.addEmployee(res, req.body);
  }
);

module.exports = router;
