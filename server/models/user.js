var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {//galima nustatyti kokios info norime
    type: String,//tik string
    required: true,//butinas yvesti
    minLength: 1,//ne tuscias
    trim: true//pasalinta whitescape
  }
})

module.exports = {User};
