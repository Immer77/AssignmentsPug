const express = require('express');
const app = express();

// 1. Templating
app.set('view engine', 'pug');

// 2. Middleware
app.use(express.static('assets'));
app.use('/biler', require('./routes/cars'))

// 3. Routes
app.get('/', (req,res) =>{
    let cats = [{name: 'Ilse', image: 'ilse.jpg'},{name: 'Shaniqua', image: 'Shaniqua.jpg'},{name: 'Potato', image: 'Potato.jpg'}];
    res.render('index', {title: 'Velkommen til Pug', name: 'Ole', cats: cats})
});


app.listen(3000, () => {
    console.log(`Listening on port http://localhost:${3000}`)
});