const express = require('express');
const app = express();

app.use(express.json());

// Setting up a basic route
app.get('/', (req, res) => {
  res.send('Welcome to my first RESTful API!');
});

// Sample data (for demonstration purposes)
let users = [
  { id: 1, name: 'Stereotypical Barbie', email: 'barbie@test.com' },
  { id: 2, name: 'Beach Ken', email: 'ken@test.com' }
];

// Creating routes for basic CRUD operations

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET a specific user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update) an existing user
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;
  users = users.map(user => (user.id === id ? { ...user, ...updatedUser } : user));
  res.json(updatedUser);
});

// DELETE a user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.json({ message: 'User deleted successfully' });
});

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
