const Joi = require('@hapi/joi');

const createJournalSchema = Joi.object({
    bookId: Joi.number().required(),
    journal: Joi.string().required(),
});

module.exports = { createJournalSchema };