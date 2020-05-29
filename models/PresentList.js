import Present from './Present';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PresentListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  list: [Present]
});

module.exports = PresentList = mongoose.model('presentList', PresentListSchema);
