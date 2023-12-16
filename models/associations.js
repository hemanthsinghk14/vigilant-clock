const Medicine = require('./Medicine');
const ExpiryAlert = require('./ExpiryAlert');

Medicine.hasMany(ExpiryAlert, { foreignKey: 'medicine_id', onDelete: 'CASCADE' });

// Make sure you synchronize your models with the database
// In your main file (e.g., app.js)
const sequelize = require('./config/database');
const Medicine = require('./models/Medicine');
const ExpiryAlert = require('./models/ExpiryAlert');

// Synchronize the models with the database
sequelize.sync({ force: true }).then(() => {
    console.log('Database and tables synced');
});

Medicine.hasMany(ExpiryAlert, { foreignKey: 'medicine_id', onDelete: 'CASCADE' });