const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/test', (req, res) => {
    res.send('Hello Express');
});

app.listen(5000, () => console.log('App running on port 5000 🔥'));
