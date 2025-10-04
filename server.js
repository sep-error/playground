import express from 'express';

const app = express();
app.use(express.json());

let students = []; // in-memory database
let idCounter = 1;

// CREATE
app.post('/students', (req, res) => {
  const student = { id: idCounter++, ...req.body };
  students.push(student);
  res.status(201).json(student);
});

// READ ALL
app.get('/students', (req, res) => {
  res.json(students);
});

// READ ONE
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  student ? res.json(student) : res.status(404).send('Not Found');
});

// UPDATE
app.put('/students/:id', (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  if (index !== -1) {
    students[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(students[index]);
  } else {
    res.status(404).send('Not Found');
  }
});

// DELETE
app.delete('/students/:id', (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.sendStatus(204);
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));