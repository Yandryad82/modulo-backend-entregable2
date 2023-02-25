const express = require('express');

const db = require('./utils/database');

const Todo = require('./models/todo.model');

const todoRoutes = require('./routes/todo.routes');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(todoRoutes);

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos OK')
  })
  .catch((error) => {
    console.log(error)
  })

  db.sync()
    .then(() => {
      console.log('Base de datos Sincronizada')
    })
    .catch((error) => {
      console.log(error)
    })

app.get('/', (req, res) => {
  res.send('Bienvenido a mi servidor')
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})