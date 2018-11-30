const express = require('express');
const app = express();

app.use(express.static('build'));

app.listen(3001, () => console.log("Server running at http://localhost:3001"));