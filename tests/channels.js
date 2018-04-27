var test = require('tape')
var bus = require('../index.js')
// import bus from '../index.js'

test('Channels Exist', function (t) {
  t.plan(7)

  t.equal(typeof bus.channels, 'object')
  t.equal(typeof bus.channels.z, 'object')
  t.equal(typeof bus.channels.z, 'object')
  t.equal(bus.channels.z.channel, 'z')
  t.equal(bus.channels.z.description, 'Getting nothing but static, getting nothing but static / Static in my attic from Channel Z')
  t.equal(bus.channels.z.emits, 'Space Junk')
  t.equal(typeof bus.channels.z.listeners, 'object')
})

