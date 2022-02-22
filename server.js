const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const path = require('path')

const port = process.env.PORT || 4000;

const app = express();
    
app.use(cors());

// Set up security
app.use(helmet());  

// convert payload to json
app.use(express.json());


app.use(express.static('build'));

app.get('/', (req, res) => {
    res.sendFile('build/index.html');
})


app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
});