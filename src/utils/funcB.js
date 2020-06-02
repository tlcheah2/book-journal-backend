const { funcA } = require('./funcA');

const funcB = () => {
    funcA();
}

module.exports = {
    funcB,
}