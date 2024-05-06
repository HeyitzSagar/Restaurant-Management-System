const express = require("express");
const app = express();
const testRoutes = require('./routes/testRoutes')
const AuthRoutes = require('./routes/AuthRoutes')
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require("../server/DbCon/db");
const port = process.env.PORT || 3001;
connectDB();


//middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
// routes related to test

    app.use("/api/v1/test", testRoutes );

// routes related to authentication
    app.use("/api/v1/auth", AuthRoutes )





app.get("/", (req, res) => res.send("Hello World!"));

//listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

