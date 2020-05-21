const express = require('express');
const journalController = require('./src/journal/journalController');
const router = express.Router();
const { bodyValidator } = require('./src/middlewares/requestValidator');
const { createJournalSchema } = require('./src/journal/journalSchemas');


// Define route here
router.post('/journal', bodyValidator(createJournalSchema), journalController.journal);

module.exports = router;