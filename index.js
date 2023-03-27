const pug = require('pug');
const express = require('express');
const app = express();
const PORT = 8008;

app.set('view engine', 'pug')

// Render at data set

  // "<p>Forbes's Pug source code!</p>"


app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!', name: 'Peter' })
})

app.listen(PORT, console.log(`Listening on port http://localhost:${PORT}`));


