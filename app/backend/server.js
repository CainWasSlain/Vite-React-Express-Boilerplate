require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT =  process.env.PORT || 5000;
const routes = require('./routes/Routes');
app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});
