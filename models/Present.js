const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PresentSchema = new Schema( {
    name: {
        type: String,
        required : true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
}); 

module.exports = Present = mongoose.model('present', PresentSchema);