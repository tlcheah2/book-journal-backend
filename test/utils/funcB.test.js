const fA = require('../../src/utils/funcA');
// Must override with mocking 1st before import functionB
fA.funcA = jest.fn();
const { funcB } = require('../../src/utils/funcB');

test('funcA() is called', () => {
    funcB();
    console.log(fA.funcA.mock);
    expect(fA.funcA).toHaveBeenCalled();
});
