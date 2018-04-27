var test = require('tape')
var bus = require('../index.js')
// import bus from '../index.js'

test('Check Channel', function (t) {
  t.plan(3)

  t.equal(typeof bus.check, 'function')
  t.true(bus.check('z'), 'Channel Z Exists')
  t.false(bus.check('a'), 'Channel A Does Not Exist')
})

