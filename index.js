const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get('/', (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages });
});

app.get('/new', (req, res) => {
  res.render('form');
});

app.post('/new', (req, res) => {
  const { user, text } = req.body;
  messages.push({ test, user, added: new Date() });
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost: ${PORT}`);
});
