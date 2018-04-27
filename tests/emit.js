var test = require('tape')
var bus = require('../index.js')
// import bus from '../index.js'

test('Emit', function (t) {

  t.equal(typeof bus.emit, 'function')

  const fn = (one, two, ...params) => {
    t.true(true, 'Function runs')
    t.true(one, 'Function accepts a param')
    t.false(two, 'Function accepts a second param')
    t.equals(params.length, 2)
    t.equals(params[0], 'space')
    t.equals(params[1], 'junk')
    t.end()
  }

  bus.on('z', fn)
  bus.emit('z', true, false, 'space', 'junk')
  bus.off('z', fn)
})

