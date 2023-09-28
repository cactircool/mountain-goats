const express = require('express');
const path = require('path');
const app = express();
const IP = require('ip');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {
        address: IP.address(),
    });
});

app.listen(PORT, console.log());
