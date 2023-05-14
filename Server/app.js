const express = require('express');
const app = express();
const moongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingsRouter = require('./routes/booking-routes');
dotenv.config();

const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization'); 
    next();
    
})

//middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

moongoose.connect("mongodb://mahmoodrajmohamed:Rfosm259@ac-7s5mmfc-shard-00-00.ghskmeo.mongodb.net:27017,ac-7s5mmfc-shard-00-01.ghskmeo.mongodb.net:27017,ac-7s5mmfc-shard-00-02.ghskmeo.mongodb.net:27017/Movies?ssl=true&replicaSet=atlas-12k776-shard-0&authSource=admin&retryWrites=true&w=majority").then(() => {
    console.log("DATABASE CONNECTED");
});

app.listen(3500, () => {
    
    console.log(`Connected to localhost port ${3500}`);
})


