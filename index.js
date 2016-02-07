
// Set up the singular emitter
var EE = require('tiny-emitter')

var ee = new EE()
var broadcaster = {
  channels: [
    {
      channel: 'z',
      description: 'Getting nothing but static, getting nothing but static / Static in my attic from Channel Z',
      emits: 'Space Junk',
      listeners: null
    }
  ]
}

function channelIsRegistered (channel) {
  // return a boolean
  return broadcaster.channels.includes(channel)
}

function tuneIn(channel) {
  if (!channelIsRegistered(channel)) {
    return new error(`That channel is not registered. Try one of the following: `, broadcaster.channels)
  }
}

export function register (channel, description, emits) {
  if (!channelIsRegistered(channel)) {
    broadcaster.channels.push({
        channel: channel,
        description: description,
        emits: emits,
        listeners: []
    })
  } else {
    new error(`Channel ${channel} is allready registered as > ${description}`)
  }
}

export function listen (channel, cb) {
  tuneInTo(channel)
  var _channel = broadcaster.channels.filter('channel' == channel)
  _channel.listeners.push(cb)
  ee.on(channel, cb)

}

export function broadcast (channel, content) {
  tuneInTo(channel)
  ee.emit(channel, content)
}

export function