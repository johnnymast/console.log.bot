class Chatbot {
    constructor() {
        this.name = 'bot';
        this.events = new Array();
        this.events['on.answer'] = {};

        var debugMode = false;
        // Create our RiveScript interpreter.
        this.rs = new RiveScript({
            debug: debugMode,
            onDebug: this.onDebug
        });

      //  this.ts.setHandler("javascript", null);
    }

    onDebug(info) {
        console.log(info);
    }

    setBotName(name) {
        this.name = name;
    }

    learn(script) {
        var self = this;
        if (typeof script == 'object') {
            this.rs.loadFile([
                "brain/begin.rive",
                "brain/admin.rive",
                "brain/clients.rive",
                "brain/eliza.rive",
                "brain/myself.rive",
                "brain/rpg.rive",
                "brain/javascript.rive"
            ], function () {
                self.rs.setVariable('name', self.name);
                self.rs.sortReplies();
            }, this.on_load_error);
        }
    }

    on_load_error() {
        console.log('load error');
    }

    feed(text = '') {
        var reply = this.rs.reply("soandso", text);
        reply = reply.replace(/\n/g, "<br>");
        this.broadcast('on.answer', reply);

        //   console.log(reply);
    }

    on(event, callable) {
        if (typeof callable == 'function') {
            this.events[event] = callable;
        }
    }

    broadcast(event, info) {
        if (typeof this.events[event] == 'function') {
            this.events[event](info);
        }
    }
}