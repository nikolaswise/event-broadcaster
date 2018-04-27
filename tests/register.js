var test = require('tape')
var bus = require('../index.js')
// import bus from '../index.js'

test('Register Channel', function (t) {
  t.plan(4)

  var z = {
    channel: 'z',
    description: 'Getting nothing but static, getting nothing but static / Static in my attic from Channel Z',
    emits: 'Space Junk',
    listeners: []
  }

  var a = {
    channel: 'a',
    description: 'Getting nothing but static, getting nothing but static / Static in my attic from Channel Z',
    emits: 'Space Junk',
    listeners: []
  }

  t.equal(typeof bus.register, 'function')
  t.false(bus.register(z), 'Channel Z Exists')
  t.true(bus.register(a), 'Registered Channel A')
  t.equals(a, bus.channels.a)
})

