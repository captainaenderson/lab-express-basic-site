const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

app.get('/', (req, res) => {
   res.render(__dirname + '/views/home.hbs');
});

app.get('/about', (req, res) => {
   res.render(__dirname + '/views/about.hbs');
});


app.get('/works', (req, res) => {
   res.render(__dirname + '/views/works.hbs');
});

app.listen(3000);
