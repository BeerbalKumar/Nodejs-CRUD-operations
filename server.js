const express = require('express');
const app = express();
const mongoose = require('./config/Db/db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo db is connected");
});


var port = 3000

app.listen(port,()=>{
    console.log(`server is working ............ ${port}`)
})

app.use(express.json());
app.use('/',require('./routes'));