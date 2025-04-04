const express = require('express');
const cors = require('cors');
const users = require('./data');


const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

app.get('/users/hobby', (req, res) => {
  const hobby = req.query.hobby;
  
  if (!hobby) {
    return res.status(400).json({ message: 'Es requerido el parámetro hobby' });
  }
  
  const usersWithHobby = users.filter(user => 
    user.hobbies.includes(hobby)
  );
  
  return res.status(200).json(usersWithHobby);
});


app.get('/users/exists', (req, res) => {
  const codigo = req.query.codigo;
  
  if (!codigo) {
    return res.status(400).json({ message: 'Es requerido el parámetro codigo' });
  }
  
  const userExists = users.some(user => user.codigo === codigo);
  
  return res.status(200).json({ exists: userExists });
});


app.get('/users/hobby/count', (req, res) => {
  const hobby = req.query.hobby;
  
  if (!hobby) {
    return res.status(400).json({ message: 'Es requerido el parámetro hobby' });
  }
  
  const count = users.filter(user => 
    user.hobbies.includes(hobby)
  ).length;
  
  return res.status(200).json({ hobby, count });
});


app.get('/users/is-free', (req, res) => {
  const freeUsers = users.filter(user => user.hobbies.length < 3);
  
  return res.status(200).json(freeUsers);
});


app.post('/users/suggest', (req, res) => {
  const { codigo, hobby } = req.body;
  
  if (!codigo || !hobby) {
    return res.status(400).json({ message: 'Son requeridos el código de usuario y el hobby' });
  }
  
  const userIndex = users.findIndex(user => user.codigo === codigo);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  

  if (users[userIndex].hobbies.includes(hobby)) {
    return res.status(200).json({ 
      message: 'El usuario ya tiene este hobby',
      user: users[userIndex]
    });
  }
  
  
  if (users[userIndex].hobbies.length < 3) {
    users[userIndex].hobbies.push(hobby);
    return res.status(200).json({ 
      message: 'Hobby agregado exitosamente',
      user: users[userIndex]
    });
  } else {
    return res.status(200).json({ 
      message: 'El usuario ya tiene 3 hobbies, no se puede agregar más',
      user: users[userIndex]
    });
  }
});


app.post('/users', (req, res) => {
  const { codigo, nombre, apellido, hobbies } = req.body;
  
  
  if (!codigo || !nombre || !apellido || !hobbies) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }
  

  if (!Array.isArray(hobbies) || hobbies.length < 2) {
    return res.status(400).json({ message: 'Se requieren al menos 2 hobbies' });
  }
  

  const userExists = users.some(user => user.codigo === codigo);
  
  if (userExists) {
    return res.status(400).json({ message: 'El usuario con este código ya existe' });
  }
  

  const newUser = {
    codigo,
    nombre,
    apellido,
    hobbies
  };
  

  users.push(newUser);
  
  return res.status(201).json({ 
    message: 'Usuario registrado exitosamente',
    user: newUser
  });
});


app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});


app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});