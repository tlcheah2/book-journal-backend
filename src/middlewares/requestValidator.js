/**
 * Validate body request
 * @param {Object} schema - Joi object schema
 */
const bodyValidator = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        const errorMessages = error.details.map((detail) => detail.message);
        return res.status(400).json({ error: errorMessages });
    }
    return next();
};

module.exports = { bodyValidator };