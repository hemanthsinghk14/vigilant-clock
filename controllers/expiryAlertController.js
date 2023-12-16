const { Op } = require('sequelize');
const ExpiryAlert = require('../models/ExpiryAlert');
const Medicine = require('../models/Medicine');

// Get all expiry alerts for medicines expiring one month away
exports.getAllExpiryAlerts = async (req, res) => {
    try {
        // Calculate the date one month from now
        const oneMonthFromNow = new Date();
        oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

        // Find expiry alerts with associated medicine details
        const expiryAlerts = await ExpiryAlert.findAll({
            where: {
                expiry_date: {
                    [Op.between]: [new Date(), oneMonthFromNow]
                }
            },
            include: {
                model: Medicine,
                attributes: ['medicine_id', 'medicine_name', 'expiry_date']
            }
        });

        res.render('expiryAlerts', { expiryAlerts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Delete an expiry alert by ID
exports.deleteAlert = async (req, res) => {
    const alertId = req.params.alertId;

    try {
        // Find the alert by ID and delete it
        await ExpiryAlert.destroy({
            where: {
                alert_id: alertId
            }
        });

        res.redirect('/expiryAlerts'); // Redirect to the expiry alerts page
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};