const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://178.128.150.79:27017/todo', { useNewUrlParser: true })
