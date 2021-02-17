const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controllers = require('./controllers');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/test', (req, res) => {
  res.send('Hello Express');
});

app.get('/users/:id', controllers.hackrBench.getOne);
app.patch('/users/aim/:id', controllers.hackrBench.updateAimScore);
app.patch('/users/react/:id', controllers.hackrBench.updateReactScore);
app.patch('/users/num/:id', controllers.hackrBench.updateNumScore);
app.patch('/users/verb/:id', controllers.hackrBench.updateVerbScore);
app.patch('/users/seq/:id', controllers.hackrBench.updateSeqScore);
app.patch('/users/chimp/:id', controllers.hackrBench.updateChimpScore);

app.listen(5000, () => console.log('App running on port 5000 🔥'));
