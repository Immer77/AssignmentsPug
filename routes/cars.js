const express = require('express');
const router = express.Router();

// Endpoints jeg vil injecte ind

router.get('/', (req,res) =>{
    res.render('biler');
})

router.get('/brands', (req,res) =>{
    res.send("Audi Ferrari, Toyota");
})

module.exports = router;