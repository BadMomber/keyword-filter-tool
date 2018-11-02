/** Package imports */
const mongoose = require ('mongoose');
const mongoose_csv = require ('mongoose-csv');

/** Initialize Schema */
const Schema = mongoose.Schema;

/** Setup Schema */
const keywordSchema = new Schema ({
  keyword: {
    type: String,
    required: 'Keyword missing'
  },
  currency: {
    type: String,
    required: 'Currency missing'
  },
  avg_monthly_searches: {
    type: Number,
    required: 'Missing avarage monthly searches'
  },
  competition: {
    type: String,
    required: false
  },
  top_of_page_bid_low_range: {
    type: Number,
    required: false
  },
  top_of_page_bid_high_range: {
    type: Number,
    required: false
  },
  monthly_searches_jan: {
    type: Number,
    required: false
  },
  monthly_searches_feb: {
    type: Number,
    required: false
  },
  monthly_searches_mar: {
    type: Number,
    required: false
  },
  monthly_searches_april: {
    type: Number,
    required: false
  },
  monthly_searches_may: {
    type: Number,
    required: false
  },
  monthly_searches_jun: {
    type: Number,
    required: false
  },
  monthly_searches_jul: {
    type: Number,
    required: false
  },
  monthly_searches_aug: {
    type: Number,
    required: false
  },
  monthly_searches_sep: {
    type: Number,
    required: false
  },
  monthly_searches_oct: {
    type: Number,
    required: false
  },
  monthly_searches_nov: {
    type: Number,
    required: false
  },
  monthly_searches_dec: {
    type: Number,
    required: false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: null
  },
});

keywordSchema.plugin (mongoose_csv);

module.exports = mongoose.model ('Keyword', keywordSchema);