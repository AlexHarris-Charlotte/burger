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
    const condition = "ID = " + req.body.burgerUpdateId;
    console.log('apples');
    console.log(req.body.burgerUpdateId);
    burger.update("BurgerName", condition, (result) => {
        res.json({result});
    })
})


// cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
    

module.exports = router;

