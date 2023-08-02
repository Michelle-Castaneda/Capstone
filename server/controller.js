require("dotenv").config();
const Sequelize = require("sequelize");
const { CONNECTION_STRING } = process.env;
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});




module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        
        CREATE table routine (
          routine_id serial primary key,
          routine_description,
          routine_frequency


        );

        INSERT INTO routine ()  

        `).then(() => {
          console.log('DB seeded!')
          res.sendStatus(200)
      }).catch(err => console.log('error seeding DB', err))
    },
  }


// //Database
// const db = [
//     {
//     routine_id: ,
// 	user_id:,
// 	routine_description: 'Read a book',
// 	routine_days: 'Daily'
//     },
//     {
//         routine_id: ,
//         routine_description: 'Read a book',
//         routine_days: 'Daily'
//     },
//     {
//         routine_id: ,
//         routine_description: 'Go for a Walk',
//         routine_days: 'Daily'
//     }


// ]

// module.exports = {
//     addTask: 


// }

//CRUD module.exports
// const Reminder = require('../models/Reminder'); // Import the Reminder model

// exports.getAllReminders = (req, res) => {
//     // Fetch all reminders for a user
//     Reminder.findAll({ where: { userId: req.params.userId } })
//         .then(reminders => res.send(reminders))
//         .catch(err => res.status(400).send(err));
// };

// exports.createReminder = (req, res) => {
//     // Create a new reminder
//     Reminder.create({ ...req.body, userId: req.params.userId })
//         .then(reminder => res.status(200).send(reminder))
//         .catch(err => res.status(400).send(err));
// };

// exports.updateReminder = (req, res) => {
//     // Update an existing reminder
//     Reminder.update(req.body, { where: { id: req.params.id, userId: req.params.userId } })
//         .then(() => res.status(200).send())
//         .catch(err => res.status(400).send(err));
// };

// exports.deleteReminder = (req, res) => {
//     // Delete a specific reminder
//     Reminder.destroy({ where: { id: req.params.id, userId: req.params.userId } })
//         .then(() => res.status(200).send())
//         .catch(err => res.status(400).send(err));
// };
