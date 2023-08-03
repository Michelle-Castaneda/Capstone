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
        DROP TABLE IF EXISTS routine;
        DROP TABLE IF EXISTS tasks;

        CREATE TABLE routine (
          routine_id SERIAL PRIMARY KEY,
          routine_description VARCHAR(300),
          routine_frequency VARCHAR(50)
        );

        CREATE TABLE tasks(
          task_id SERIAL PRIMARY KEY,
          task_description VARCHAR(200),
          task_date TIMESTAMP,
          task_status VARCHAR(50)
        );

        INSERT INTO routine (routine_description,routine_frequency)  
          VALUES
          ('Take Medicine','Daily'),
          ('Go for a walk','Daily'),
          ('Attend music theraphy session','Weekly'),
          ('Cook simple meal','Daily');
         
          INSERT INTO tasks(task_description,task_date,task_status)
          VALUES
          ('Watch Tv Show',NULL,'Not Started'),
          ('Read a book',NULL, 'Completed'),
          ('Practice Yoga',NULL, 'In Progress'),
          ('Drawing time',NULL, 'Not Started');

        `).then(() => {
          console.log('DB seeded!')
          res.sendStatus(200)
      }).catch(err => console.log('error seeding DB', err))
    },
    createTask:(req,res) => {
      const {task_description, task_date, task_status} = req.body

      sequelize.query(`
      INSERT INTO tasks(task_description, task_date, task_status)
      VALUES ('${task_description}', '${task_date}', '${task_status}' 
      ) RETURNING *
      `)
      .then(dbRes => {
        res.status(200).send(dbRes[0])
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })
  },
  getTasks:(req, res) => {
    sequelize.query(`
    SELECT * FROM tasks;
    `)
    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => res.status(500).send(err))
},  
  createRoutine:(req,res) => {
  const {routine_description, routine_frequency} = req.body

  sequelize.query(`
  INSERT INTO routine(routine_description, routine_frequency)
  VALUES ('${routine_description}', '${routine_frequency}') 
  RETURNING *
  `)
  .then(dbRes => {
    res.status(200).send(dbRes[0])
})
.catch(err => {
  console.log(err)
  res.status(400).send(err)
})
},
getRoutine:(req, res) => {
sequelize.query(`
SELECT * FROM routine;
`)
.then(dbRes => res.status(200).send(dbRes[0]))
.catch(err => res.status(500).send(err))
},  
deleteRoutine:(req,res) => {
  const {routine_id} = req.params

  sequelize.query(`
      DELETE FROM routine 
      WHERE routine_id = ${routine_id};
  `)
  .then(dbRes => res.status(200).send(dbRes[0]))
  .catch(err => res.status(500).send(err))
},
}