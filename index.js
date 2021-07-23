const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const app = express();

app.use(cors());
app.use(json());

app.use('/', (req, res) => {
  res.send('Hello world');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
