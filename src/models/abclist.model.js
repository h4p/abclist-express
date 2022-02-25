const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const abclistSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    topic: {
      type: String,
      trim: true,
      required: true,
    },
    abclist: {
      type: Map,
      of: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
abclistSchema.plugin(toJSON);
abclistSchema.plugin(paginate);

/**
 * @typedef Abclist
 */
const Abclist = mongoose.model('Abclist', abclistSchema);

module.exports = Abclist;
