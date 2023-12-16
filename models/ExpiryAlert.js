const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Medicine = require('./Medicine'); // Make sure to replace with the actual path

const ExpiryAlert = sequelize.define('ExpiryAlert', {
    alert_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    medicine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    expiry_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    alert_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false // Disable timestamps
});

ExpiryAlert.belongsTo(Medicine, { foreignKey: 'medicine_id' });

module.exports = ExpiryAlert;
