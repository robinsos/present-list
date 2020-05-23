const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const config = require('config');


const app = express();

app.use(cors());
app.use(express.json());

const db = config.get('mongoURI');

console.log(`Attempting to connect to URI: ${db}`);
// Connect to mongo
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(db)
   .then(() => console.log('MongoDB Connected...'))
   .catch(err=> console.log(err));

// Use Routes
app.use('/api/presents', require('./routes/api/presents'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req,res)=> {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
