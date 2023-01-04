const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', (req, res)=>{
    res.send("API working.");
})


app.listen(process.env.PORT || 8080, () => {
    console.log('listening to port 8080');
});