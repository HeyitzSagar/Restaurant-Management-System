const express = require('express')
const app = express()
const connectDB = require('../server/DbCon/db');
const port = 3000;

connectDB();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
