const {Router} = require('express');
const employeesCtrl = require('../controllers/employees.controller.js');
const router = Router();

//C-R-U-D
//Create-Read-


router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployee);
router.get('/:id', employeesCtrl.getEmployee);
router.put('/:id', employeesCtrl.editEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);

module.exports = router;