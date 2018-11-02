/** Package imports */
const mongoose = require ('mongoose');

/** Initialize Schema */
const Schema = mongoose.Schema;

/** Setup Schema */
const keywordSchema = Schema({
  _id: mongoose.Schema.Types.ObjectId,
  keyword: {
    type: String,
    required: false
  },
  currency: {
    type: String,
    required: false
  },
  avg_monthly_searches: {
    type: Number,
    required: false
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
  monthly_searches_month_1: {
    type: Number,
    required: false
  },
  monthly_searches_month_2: {
    type: Number,
    required: false
  },
  monthly_searches_month_3: {
    type: Number,
    required: false
  },
  monthly_searches_month_4: {
    type: Number,
    required: false
  },
  monthly_searches_month_5: {
    type: Number,
    required: false
  },
  monthly_searches_month_6: {
    type: Number,
    required: false
  },
  monthly_searches_month_7: {
    type: Number,
    required: false
  },
  monthly_searches_month_8: {
    type: Number,
    required: false
  },
  monthly_searches_month_9: {
    type: Number,
    required: false
  },
  monthly_searches_month_10: {
    type: Number,
    required: false
  },
  monthly_searches_month_11: {
    type: Number,
    required: false
  },
  monthly_searches_month_12: {
    type: Number,
    required: false
  },
});

module.exports = mongoose.model ('Keyword', keywordSchema);