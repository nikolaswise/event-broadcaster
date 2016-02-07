(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, function () { 'use strict';

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  // Set up the singular emitter
  var EE = require('tiny-emitter');

  var Broadcaster = function () {
    function Broadcaster() {
      _classCallCheck(this, Broadcaster);

      this.ee = new EE();
      this.channels = [{
        name: 'z',
        description: 'Getting nothing but static, getting nothing but static / Static in my attic from Channel Z',
        emits: 'Space Junk',
        listeners: []
      }];
    }

    _createClass(Broadcaster, [{
      key: 'tuneInTo',
      value: function tuneInTo(name) {
        var target = this.channelIsRegistered(name);
        if (target) {
          return target;
        } else {
          return new Error('That channel is not registered. Try one of the following: ' + this.channels);
        }
      }
    }, {
      key: 'channelIsRegistered',
      value: function channelIsRegistered(name) {
        var registration = this.channels.filter(function (channel) {
          return channel.name == name;
        });
        return registration.length == 1 ? registration[0] : false;
      }
    }, {
      key: 'register',
      value: function register(name, description, emits) {
        var registration = this.channelIsRegistered(name);
        if (registration) {
          return new Error('Channel ' + registration.name + ' is allready registered as ' + registration.description);
        } else {
          this.channels.push({
            name: name,
            description: description,
            emits: emits,
            listeners: []
          });
        }
      }
    }, {
      key: 'remove',
      value: function remove(name) {
        this.channels.forEach(function (channel, i) {
          if (channe.name == name) {
            this.channels.splice(i, 1);
          }
        });
      }
    }, {
      key: 'listen',
      value: function listen(name, cb) {
        var channel = this.tuneInTo(name);
        if (channel.name == name) {
          channel.listeners.push(cb);
          this.ee.on(channel.name, cb);
        } else {
          return channel;
        }
      }
    }, {
      key: 'broadcast',
      value: function broadcast(name, content) {
        var channel = this.tuneInTo(name);
        if (channel.name == name) {
          this.ee.emit(channel.name, content);
        } else {
          return channel;
        }
      }
    }]);

    return Broadcaster;
  }();

  exports.default = Broadcaster;

}));