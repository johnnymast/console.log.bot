var Engine =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// require ('chatbot.js');


var myengine = function () {

    var capabilities = ["If you say 'hip hip', the bot says hooray"];

    return {
        react: function react(query) {

            var content = '';
            if (query == 'hip hip') {
                content = 'hooray';
            }

            ChatBot.addChatEntry(content, "bot");
            ChatBot.thinking(false);
        },
        getCapabilities: function getCapabilities() {
            return capabilities;
        },
        getSuggestUrl: function getSuggestUrl() {
            return 'https://yourserver/uniboxSuggests?query=';
        }
    };
}();

// initialize the bot
var config = {
    // what inputs should the bot listen to? this selector should point to at least one input field
    inputs: '#humanInput',
    // if you want to show the capabilities of the bot under the search input
    inputCapabilityListing: true,
    // optionally, you can specify which conversation engines the bot should use, e.g. webknox, spoonacular, or duckduckgo
    engines: [myengine],
    // you can specify what should happen to newly added messages
    addChatEntryCallback: function addChatEntryCallback(entryDiv, text, origin) {
        console.log('callback');
    }
};
ChatBot.init(config);

ChatBot.setBotName("bender");

// 1. parameter: the pattern to listen for
// 2. parameter: either "response" to respond or "rewrite" to rewrite the request
// 3. parameter: either the response or the rewrite value, or undefined if nothing should happen
// 4. parameter: a callback function that gets the matches of the pattern
// 5. parameter: a description of that pattern, this is used to tell the user what he can say. Use quotes '' to mark phrases and [] to mark placeholders
ChatBot.addPattern("(?:my name is|I'm|I am) (.*)", "response", "Hi $1, thanks for talking to me today", function (matches) {
    ChatBot.setHumanName(matches[1]);
}, "Say 'My name is [name]' to be called by your name.");

ChatBot.addPattern("^hi$", "response", "Howdy my friend", undefined, "Say 'Hi' to be greeted.");

ChatBot.addPattern("compute ([0-9]+) plus ([0-9]+)", "response", undefined, function (matches) {
    ChatBot.addChatEntry("That would be " + (1 * matches[1] + 1 * matches[2]) + ".", "bot");
}, "Say 'compute [number] plus [number]' to make the bot your math monkey");

var sampleConversation = ["Hi", "My name is Botty McBotface", "Bye"];

// play the conversation, second parameter is the pause between the inputs in milliseconds
ChatBot.playConversation(sampleConversation, 4000);

var bot = new Bot();

var __console_log = console.log;
console.log = function (message) {
    for (var _len = arguments.length, optionalParams = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        optionalParams[_key - 1] = arguments[_key];
    }

    if (optionalParams.length) {
        __console_log(message, optionalParams);
    } else {
        __console_log(message);
    }
};

/***/ })
/******/ ]);