const { Abclist } = require('../models');

/**
 * Query for abclists
 * @returns {Promise<QueryResult>}
 */
const queryAbclists = async () => {
  const abclists = await Abclist.find();
  return abclists;
};

module.exports = {
  queryAbclists,
};
