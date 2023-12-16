const { Sequelize } = require('sequelize');

// Replace 'your_username', 'your_password', and 'your_database' with your actual database credentials
const sequelize = new Sequelize('alert', 'root', 'sonnu479H', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

// Test the database connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;