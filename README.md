# Click Translator

## Installation:

Install TamperMonkey's plugin for your web browser: https://www.tampermonkey.net/

Once installed, click this link: https://github.com/adriancuadrado/click-translator/raw/master/click-translator.user.js

Afterwards you will have to indicate yourself in which websites you want to use this plugin by going to:
1. TamperMonkey's plugin
1. Dashboard
1. Click Translator
1. Settings
1. User includes
1. Add...
1. Write the website's url. Remember, it must end with an **asterisk**.  
Example: http://novelfreereadonline.com/*

## Usage:

Click in a word in any website to have it's definition displayed in a new popup with [WordReference](http://wordreference.com/).

Select some text in any website to have it translated in [Google Translate](https://translate.google.com/).

Some webbrowsers might block popups. Make sure yours don't by telling the webbrowser in turn to not block the popup:
* **Chrome**: https://support.google.com/chrome/answer/95472?co=GENIE.Platform%3DDesktop&hl=en
* **Firefox**: https://support.mozilla.org/en-US/kb/pop-blocker-settings-exceptions-troubleshooting

## Configuration:

Inside the script set the **`config`** variable with the values that best suits your preferences.  
This is it's default value:
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
* **top**: Number of pixels from the top of your screen where the popups will appear by default.
* **left**: Same as top, but from the left side of your screen.
* **width**: Popup's width.
* **height**: Popup's height.
* **language**: Language to translate the selection to. This is replaced as-is in the Google Translate's url.