const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./database/db");
const dotenv = require('dotenv');
const router = require('./routes/router');
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
db.connect();

app.get('/', (req, res)=>{
    res.send("API working.");
})

router.use('/', router);

app.listen(process.env.PORT || 8080, () => {
    console.log('listening to port 8080');
});