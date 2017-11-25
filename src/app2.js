let bot = new Chatbot();


bot.learn([
    "brain/begin.rive",
    "brain/admin.rive",
    "brain/clients.rive",
    "brain/eliza.rive",
    "brain/myself.rive",
    "brain/rpg.rive",
    "brain/javascript.rive"
]);
bot.setBotName('robin');
bot.on('on.answer', function(reply) {
    console.debug('reply == '+reply);
});

let __console_log = console.log;
console.log = function (message, ...optionalParams) {
    if (optionalParams.length) {
        __console_log(message, optionalParams);
    } else {
        __console_log(message)
    }
    bot.feed(message)
};