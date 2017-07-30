var mongoose = require('mongoose');

//kuriamas modelis
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false//defeultas
  },
  completedAt: {
    type: Number,
    default: null
  }
})

module.exports = {Todo};
