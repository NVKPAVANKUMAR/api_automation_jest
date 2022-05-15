const environment = process.env.ENV.trim();

console.log('Selected environment: ' + environment);

const env = require(`./environments/${environment}`);

module.exports = env;
