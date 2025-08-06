
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();

mongoose.connect(
  process.env.MONGO_URI
).then(() => console.log('MongoDB connected'))
 .catch(err => console.error(err));

app.get('/', (req, res) => res.send('API Running'));

// Add this line to use your diary routes
app.use('/api/diary', require('./routes/diary'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));