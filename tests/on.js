var test = require('tape')
var bus = require('../index.js')
// import bus from '../index.js'

test('On', function (t) {
  t.plan(4)

  const fn = () => true

  t.equal(typeof bus.on, 'function')
  t.true(bus.on('z', fn), 'Function adds cleanly.')
  t.equals(bus.channels.z.listeners.length, 1)
  t.false(bus.on('a', fn), 'Cannot add to unregistered channel.')
  bus.off('z', fn)
})

