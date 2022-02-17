const catchAsync = require('../utils/catchAsync');
const { abclistService } = require('../services');

const getAbclists = catchAsync(async (req, res) => {
  const result = await abclistService.queryAbclists();
  res.send(result);
});

module.exports = {
  getAbclists,
};
