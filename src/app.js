class Bot {
    constructor() {
        console.log('why dont you bot.knock()')

    }

    printMenu() {
        var lines = [
            "Are you looking for a job?",
            " 1) Yes... and I'm the ninja unicorn you are looking for",
            "",
            "Nope, I was...",
            " 2) ... just curious",
            " 3) ... trying to hack into your system",
            "---",
            "Try cyberdelia.menu(option)"
        ];
        console.log(lines.join("\n"));
    };


    knock() {
        console.log('Hi cyber-space traveller. Maybe you want to see our bot.menu().');
    }

    menu(opt) {

        if (opt) {
            switch (opt) {
                case 1:
                    console.log('Interesting. Please tell us more jobs@thenextweb.com')
                    break;
                case 2:
                    console.log("Nice! Aren't you curious about this https://youtu.be/dQw4w9WgXcQ ?")
                    break;
                case 3:
                    console.log('Well... enjoy! http://hackertyper.com/')
                    break;
                default:
                    console.log('Meeeeh');
            }
        }
        else {
            this.printMenu();
        }
    }
}


var bot = new Bot();


let __console_log = console.log;
console.log = function (message, ...optionalParams) {
    if (optionalParams.length) {
        __console_log(message, optionalParams);
    } else {
        __console_log(message)
    }
};