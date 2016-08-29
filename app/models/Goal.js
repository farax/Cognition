    var mongoose = require('mongoose');


	// Model: Goal =================
    module.exports = mongoose.model('Goal', {
        text : String
    })