const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;



app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server Works my dude');
})



app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
})