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

app.get('/messages/:id', (req, res) => {
  const message = messages[req.params.id];
  if (message) {
    res.render('message', { title: "Message Details", message });
  } else {
    res.status(404).send('Message not found');
  }
})

app.post('/new', (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost: ${PORT}`);
});
