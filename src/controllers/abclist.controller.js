const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { abclistService } = require('../services');

const getAbclists = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['topic']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);

  const result = await abclistService.queryAbclists(filter, options);
  res.send(result);
});

const createAbclist = catchAsync(async (req, res) => {
  req.body.user = req.user.id;
  const abclist = await abclistService.createAbclist(req.body);
  res.status(httpStatus.CREATED).send(abclist);
});

const getAbclist = catchAsync(async (req, res) => {
  const abclist = await abclistService.getAbclistById(req.params.abclistId);
  if (!abclist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Abclist not found');
  }
  res.send(abclist);
});

const updateAbclist = catchAsync(async (req, res) => {
  const abclist = await abclistService.updateAbclistById(req.params.abclistId, req.body);
  res.send(abclist);
});

const deleteAbclist = catchAsync(async (req, res) => {
  await abclistService.deleteAbclistById(req.params.abclistId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getAbclists,
  createAbclist,
  getAbclist,
  updateAbclist,
  deleteAbclist,
};
