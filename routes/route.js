const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicineController');
const expiryAlertController = require('../controllers/expiryAlertController');

//Home
router.get('/home', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

// Medicine routes
router.get('/medicines', medicineController.getAllMedicines);
router.get('/medicines/:id', medicineController.getMedicineById);
router.post('/createNewMedicine', medicineController.createMedicine);
router.get('/createNewMed', medicineController.renderCreateMed);
router.get('/delete-medicine/:id', medicineController.deleteMedicine);

// Expiry Alert routes
router.get('/expiryAlerts', expiryAlertController.getAllExpiryAlerts);
router.get('/delete/:alertId', expiryAlertController.deleteAlert);

module.exports = router;