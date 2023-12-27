require('dotenv').config();
const express = require('express');
const cors = require('cors');
//const connectDB = require('./config/connectDB');
const mongoose = require('mongoose');
const Item = require('./models/item');

const app = express();

//connectDB();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Enable CORS
const corsOptions = {
    origin: 'http://localhost:5173',
}

app.use(cors(corsOptions));
//app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

module.exports = app;