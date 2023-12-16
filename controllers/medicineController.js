const Medicine = require('../models/Medicine');
const ExpiryAlert = require('../models/ExpiryAlert');

// Get all medicines
exports.getAllMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.findAll();
        res.render('medicines', { medicines });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Get a specific medicine by ID
exports.getMedicineById = async (req, res) => {
    const { id } = req.params;
    try {
        const medicine = await Medicine.findByPk(id);
        if (!medicine) {
            return res.status(404).send('Medicine not found');
        }
        res.render('getMedicineById', { medicine });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// render create new medicine
exports.renderCreateMed = async (req, res) => {
    res.render('createNewMedicine');
};

// Create a new medicine
exports.createMedicine = async (req, res) => {
    const { medicine_name, manufacturing_date, expiry_date, quantity, supplier_name, storage_location, admin_id } = req.body;
    try {
        // Omitting medicine_id as it's auto-incrementing and doesn't need to be provided
        const newMedicine = await Medicine.create({
            medicine_name,
            manufacturing_date,
            expiry_date,
            quantity,
            supplier_name,
            storage_location,
            admin_id,
        });
        res.redirect('/medicines');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.deleteMedicine = async (req, res) => {
    const { id } = req.params;

    try {
        // Delete associated records in the `expiryalerts` table
        await ExpiryAlert.destroy({ where: { medicine_id: id } });

        // Delete the record in the `Medicines` table
        const medicine = await Medicine.findByPk(id);
        if (!medicine) {
            return res.status(404).send('Medicine not found');
        }

        await medicine.destroy();

        // Redirect to the medicines page after successful deletion
        res.redirect('/medicines');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


