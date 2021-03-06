
// Usage:
//  cd path/to/src/test
//  snode runner-in-node.js --base ../

/**
 * @fileoverview Run test cases in node environment.
 * @author lifesinger@gmail.com (Frank Wang)
 */

define(function(require) {

  var testCases = require('./config').testCases;
  var excludes = [
      'modules/alias',
      'modules/load',
      'modules/metadata',
      'modules/checkPotentialErrors',
      'packages/math'
  ];

  testCases.forEach(function(test) {
    if (excludes.indexOf(test) === -1) {
      console.log(' ' + test);
      require('./' + test + '/program.js');
    }
  });

});
