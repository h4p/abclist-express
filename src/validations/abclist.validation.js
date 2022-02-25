const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getAbclists = {
  query: Joi.object().keys({
    topic: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const createAbclist = {
  body: Joi.object().keys({
    topic: Joi.string().required(),
    abclist: Joi.object(),
  }),
};

const getAbclist = {
  params: Joi.object().keys({
    abclistId: Joi.string().custom(objectId),
  }),
};

const updateAbclist = {
  params: Joi.object().keys({
    abclistId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      topic: Joi.string(),
      abclist: Joi.object(),
    })
    .min(1),
};

const deleteAbclist = {
  params: Joi.object().keys({
    abclistId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getAbclists,
  createAbclist,
  getAbclist,
  updateAbclist,
  deleteAbclist,
};
