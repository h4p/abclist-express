const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

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
    completed: {
      type: Number,
      default: 0,
    },
    abclist: {
      type: Map,
      of: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
abclistSchema.plugin(toJSON);

/**
 * @typedef Abclist
 */
const Abclist = mongoose.model('Abclist', abclistSchema);

module.exports = Abclist;
