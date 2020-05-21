// Mock Express Request So req.body can be called
const mockRequest = (body, params) => ({
    body,
    ...params,
  });
  
  /**
     * Mock Express Response
     * res.status return the res
     * res.json return a mock function that return the value
     */
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn(() => res);
    res.json = jest.fn(value => value);
    return res;
  };
  
  const mockNext = () => jest.fn();
  
  module.exports = { mockRequest, mockResponse, mockNext };
  