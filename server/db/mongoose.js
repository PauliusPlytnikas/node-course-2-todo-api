var mongoose = require('mongoose');//kvieciamas mongoose

mongoose.Promise = global.Promise;//konfiguruojami mongoose promise
mongoose.connect('mongodb://localhost:27017/TodoApp');//jungiamasi prie DB

module.exports = {mongoose}
