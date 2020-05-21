const { mockRequest, mockResponse, mockNext } = require('../utils/expressMocker');
const { createJournalSchema } = require('../../src/journal/journalSchemas');
const { bodyValidator } = require('../../src/middlewares/requestValidator');

test('Return 400 when the create journal schema validation is failed', () => {
    const req = mockRequest({
        bookId: 1,
    });
    const res = mockResponse();
    const next = mockNext();
    bodyValidator(createJournalSchema)(req, res, next);
    // Expect status 400 bad request called if there is error
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledTimes(0);
});

test('Next middleware is called when the create journal schema validation is successful', () => {
    const req = mockRequest({
        bookId: 1,
        journal: 'This is the summary of my reading today...'
    });
    const res = mockResponse();
    const next = mockNext();
    bodyValidator(createJournalSchema)(req, res, next);
    // Expect next middleware called if validation is passed
    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
});