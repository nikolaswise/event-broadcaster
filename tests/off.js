var test = require('tape')
var bus = require('../index.js')
// import bus from '../index.js'

test('Off', function (t) {
  t.plan(4)

  const fn = () => true
  bus.on('z', fn)

  t.equal(typeof bus.off, 'function')
  t.false(bus.off('a', fn), 'Cannot remove unregistered event.')
  t.equal(bus.channels.z.listeners.length, 1)

  bus.off('z', fn)
  t.equal(bus.channels.z.listeners.length, 0)
})

