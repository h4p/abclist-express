const httpStatus = require('http-status');
const { Abclist } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get all abclists
 * @returns {Promise<QueryResult>}
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAbclists = async (filter, options) => {
  const abclists = await Abclist.paginate(filter, options);
  return abclists;
};

/**
 * Create an abcList
 * @returns {Promise<Abclist>}
 */
const createAbclist = async (abclistBody) => {
  return Abclist.create(abclistBody);
};

/**
 * Get abclist by id
 * @param {ObjectId} id
 * @returns {Promise<Abclist>}
 */
const getAbclistById = async (id) => {
  return Abclist.findById(id);
};

/**
 * Update Abclist by id
 * @param {ObjectId} abclistId
 * @param {Object} updateBody
 * @returns {Promise<Abclist>}
 */
const updateAbclistById = async (abclistId, updateBody) => {
  const abclist = await getAbclistById(abclistId);
  if (!abclist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Abclist not found');
  }

  Object.assign(abclist, updateBody);
  await abclist.save();
  return abclist;
};

/**
 * Delete abclist by id
 * @param {ObjectId} abclistId
 * @returns {Promise<Abclist>}
 */
const deleteAbclistById = async (abclistId) => {
  const abclist = await getAbclistById(abclistId);
  if (!abclist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Abclist not found');
  }
  await abclist.remove();
  return abclist;
};

module.exports = {
  queryAbclists,
  createAbclist,
  getAbclistById,
  updateAbclistById,
  deleteAbclistById,
};
