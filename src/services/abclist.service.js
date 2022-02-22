const { Abclist } = require('../models');

/**
 * Query for abclists
 * @returns {Promise<QueryResult>}
 */
const queryAbclists = async () => {
  const filter = {};

  // Equivalently, you can call Abclist.find() with no arguments
  // and get the same result.
  const abclists = await Abclist.find(filter);
  return abclists;
};

module.exports = {
  queryAbclists,
};
