const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

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
    const condition = "ID = " + req.body.burgerUpdateId;
    console.log('apples');
    console.log(req.body.burgerUpdateId);
    burger.update("BurgerName", condition, (result) => {
        res.json({result});
    })
})

module.exports = router;

