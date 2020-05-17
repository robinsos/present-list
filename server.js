const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const presents = require('./routes/api/presents');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
console.log(`Attempting to connect to URI: ${db}`);
// Connect to mongo

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err=> console.log(err));

// Use Routes
app.use('/api/presents', presents);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
