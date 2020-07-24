const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://:@cluster0.h6qxk.mongodb.net/?retryWrites=true&w=majority')

module.exports = mongoose;
