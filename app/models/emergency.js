var mongoose = require('mongoose');

module.exports = mongoose.model('emergency', {name:{type: String, default:''}
});