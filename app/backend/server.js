require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT =  process.env.PORT || 5000;
const routes = require('./routes/Routes');
app.use(express.json());
app.use(cors());

app.use('/api', routes);
app.use(express.static(path.join(__dirname, '../../app/frontend/dist')));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../../app/frontend/dist', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});
