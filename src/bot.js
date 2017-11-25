var myengine = function() {

    var capabilities = [
        "If you say 'hip hip', the bot says hooray"
    ]

    return {
        react: function (query) {

            var content = '';
            if (query == 'hip hip') {
                content = 'hooray';
            }

            ChatBot.addChatEntry(content, "bot");
            ChatBot.thinking(false);

        },
        getCapabilities: function() {
            return capabilities;
        },
        getSuggestUrl: function() {
            return 'https://yourserver/uniboxSuggests?query=';
        }
    }
}();

// initialize the bot
var config = {
    // what inputs should the bot listen to? this selector should point to at least one input field
    inputs: '#humanInput',
    // if you want to show the capabilities of the bot under the search input
    inputCapabilityListing: true,
    // optionally, you can specify which conversation engines the bot should use, e.g. webknox, spoonacular, or duckduckgo
    engines: [ChatBot.Engines.duckduckgo()],
    // you can specify what should happen to newly added messages
    addChatEntryCallback: function(entryDiv, text, origin) {
        entryDiv.slideDown();
    }
};

window.onload = function() {
    ChatBot.init(config);
}