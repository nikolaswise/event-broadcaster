function B () {}

// Set up the singular emitter
var EE = require('tiny-emitter');

B.prototype = {
  ee: new EE(),
  channels: [
    {
      name: 'z',
      description: 'Getting nothing but static, getting nothing but static / Static in my attic from Channel Z',
      emits: 'Space Junk',
      listeners: []
    }
  ],

  tuneInTo: function (name) {
    var channel = channelIsRegistered(name)
    if (channel) {
      return channel
    } else {
      return new Error(`That channel is not registered. Try one of the following: ${channels}`)
    }
  },

  channelIsRegistered: function (name) {
    var registration = channels.filter(function(channel) {
      return channel.name == name
    })
    return registration.length == 1 ? registration[0] : false
  },

  register: function (channel) {
    var registration = channelIsRegistered(channel.name)
    if (registration) {
      return new Error(`Channel ${registration.name} is allready registered as ${registration.description}`)
    } else {
      channel.listeners = []
      channels.push(channel)
    }
  },

  remove: function (name) {
    this.channels.forEach(function (channel, i){
      if (channe.name == name) {
        this.channels.splice(i, 1)
      }
    })
  }

  listen: function (name, cb) {
    var channel = this.tuneInTo(name)
    if (channel.name == name) {
      channel.listeners.push(cb)
      this.ee.on(channel.name, cb)
    } else {
      return channel
    }
  },

  broadcast: function (name, content) {
    var channel = this.tuneInTo(name)
    if (channel.name == name) {
      this.ee.emit(channel.name, content)
    } else {
      return channel
    }
  }
}

module.exports = B