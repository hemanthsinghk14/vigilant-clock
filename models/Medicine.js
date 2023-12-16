const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import your Sequelize instance

const Medicine = sequelize.define('Medicine', {
    medicine_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    medicine_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    manufacturing_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    expiry_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    supplier_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    storage_location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    admin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Medicine;