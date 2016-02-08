

# Event Broadcaster

Like tiny emitter, but requires that you interact with registered channels in order to keep track of things. When creating a channel, one specifies the channels name, purpose, and what kind of thing it should emit on that channel.

When emitting on a channel, the broadcaster checks to see if that channel exists and does a very cursory check to see if your emitting the right kind of thing. This isn't a big deal, but might help keep things clear later on.

When listening to a channel, the broadcaster checks to see if that channel exists - if it doesn't, it returns a helpful list of what channels do exist.

Removing a channel pulls it from the registry, and future listeners will get an error when they try to tune in to the channel.


## Methods

register
remove
listen
broadcast