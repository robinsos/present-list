const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PresentSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  address: String,

  dateChanged: {
    type: Date,
    default: Date.now
  }
});

module.exports = Present = mongoose.model('present', PresentSchema);
