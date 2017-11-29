import RiveScript from "rivescript";

class Chatbot {
    constructor() {
        this.name = 'bot';
        this.events = [];
        this.events['on.answer'] = {};
        this.debugMode = false;

        this.rs = new RiveScript({
            debug: this.debugMode,
            onDebug: this.onDebug
        });
    }

    onDebug(info) {
        console.debug(info);
    }

    setBotName(name) {
        this.name = name;
    }

    learn(files) {
        let self = this;
        if (typeof files === 'object') {
            this.rs.loadFile(files, function () {
                self.rs.setVariable('name', self.name);
                self.rs.sortReplies();
            }, function (err, status) {
                // on error
                console.debug('Error: ' + err + ' Status: ' + status); // + ' LoadCount: '+loadCount)
            });
        }
    }

    feed(text = '') {
        let reply = this.rs.reply("soandso", text);
        this.broadcast('on.answer', reply);
    }

    on(event, callable) {
        if (typeof callable === 'function') {
            this.events[event] = callable;
        }
    }

    broadcast(event, info) {
        if (typeof this.events[event] === 'function') {
            this.events[event](info);
        }
    }
}
module.exports = Chatbot;