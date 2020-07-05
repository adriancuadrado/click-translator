# Click Translator

## Installation:

Just click this link: https://github.com/adriancuadrado/click-translator/raw/master/index.user.js

## Usage:

Click in a word in any website to have it's definition displayed in a new popup with wordreference.

Select some text in any website to have it translated in google translate.

Some webbrowsers might block popups. Make sure yours don't by telling the webbrowser in turn to not block the popup:
* **Chrome**: https://support.google.com/chrome/answer/95472?co=GENIE.Platform%3DDesktop&hl=en
* **Firefox**: https://support.mozilla.org/en-US/kb/pop-blocker-settings-exceptions-troubleshooting

## Configuration:

1. In the header of this script, make sure to set the correct value to `// @match`. The default value makes this script work in any website. Just replace `http://*/*` with the website you want to use this TamperMonkey script using optionally [glob patterns](https://en.wikipedia.org/wiki/Glob_(programming)).

    For instance, if you are going to use this plugin while reading books in http://novelfreereadonline.com/, you would have to replace the default value with http://novelfreereadonline.com/*

2. Inside the script change the `config` variable with the value that best suits your preferences. It's default value is this:
    ```js
    let config = {
        selector: 'p',
        top: 100,
        left: 100,
        width: 1000,
        height: 1000,
        language: 'es'
    };
    ```
    * **selector**: The css selector that selects all html elements whose text is subject to be clickable i.e. those elements that contain text you want to translate with google translate or know about it's definition with wordreference.
    * **top**: number of pixels from the top of your screen where the popups will appear by default.
    * **left**: same as top, but from the left side of your screen.
    * **width**: popup's width.
    * **height**: popup's height.