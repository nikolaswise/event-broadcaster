// Set up the singular emitter
var EE = require('tiny-emitter');

class Broadcaster {
  constructor () {
    this.ee = new EE()
    this.channels = [
      {
        name: 'z',
        description: 'Getting nothing but static, getting nothing but static / Static in my attic from Channel Z',
        emits: 'Space Junk',
        listeners: []
      }
    ]
  }

  tuneInTo (name) {
    var target = this.channelIsRegistered(name)
    if (target) {
      return target
    } else {
      return new Error(`That channel is not registered. Try one of the following: ${this.channels}`)
    }
  }

  channelIsRegistered (name) {
    var registration = this.channels.filter(function(channel) {
      return channel.name == name
    })
    return registration.length == 1 ? registration[0] : false
  }

  register (name, description, emits) {
    var registration = this.channelIsRegistered(name)
    if (registration) {
      return new Error(`Channel ${registration.name} is allready registered as ${registration.description}`)
    } else {
      this.channels.push({
        name: name,
        description: description,
        emits: emits,
        listeners: []
      })
    }
  }

  remove (name) {
    this.channels.forEach(function (channel, i){
      if (channe.name == name) {
        this.channels.splice(i, 1)
      }
    })
  }

  listen (name, cb) {
    var channel = this.tuneInTo(name)
    if (channel.name == name) {
      channel.listeners.push(cb)
      this.ee.on(channel.name, cb)
    } else {
      return channel
    }
  }

  broadcast (name, content) {
    var channel = this.tuneInTo(name)
    if (channel.name == name) {
      this.ee.emit(channel.name, content)
    } else {
      return channel
    }
  }
}

export default Broadcaster