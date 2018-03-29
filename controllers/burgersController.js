const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// our routes send objects of data to handlebars files

router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {
        burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
})

router.post('/api/burgers', (req, res) => {
    console.log('val passed to route', req.body)
    console.log(req.body.name);
    burger.create("BurgerName", req.body.name, (result) => {
        res.json({result});
    });
})

router.put('/api/burgers/update', (req, res) => {
    console.log('apples');
    console.log(req.body.burgerToUpdate);
    burger.update("BurgerName", req.body.burgerToUpdate, (result) => {
        res.json({result});
    })
})
    

module.exports = router;

