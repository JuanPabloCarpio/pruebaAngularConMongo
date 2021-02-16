const employeeCtrl = {}

employeeCtrl.getEmployees = (req, res) => {
    res.send('get Employees')
}
employeeCtrl.createEmployee = (req, res) => {
    res.send('create Employees')
}
employeeCtrl.getEmployee = (req, res) => {
    res.send('getEmployee')
}
employeeCtrl.editEmployee = (req, res) => {}
employeeCtrl.deleteEmployee = (req, res) => {}

module.exports = employeeCtrl; 