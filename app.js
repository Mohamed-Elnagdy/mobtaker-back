const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const courseRouter = require('./routes/courseRoutes');
const registerRouter = require('./routes/registerRoutes');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(courseRouter);
app.use(registerRouter);

mongoose
  .connect(process.env.DATABASE_CONNECTION)
  .then(() => {
    console.log('connected :))');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server working at ${PORT}`);
});
