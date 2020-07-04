// ==UserScript==
// @name         Click Translator
// @namespace    https://github.com/adriancuadrado/click-translator
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://novelfreereadonline.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

(function( $ ) {
    'use strict';
$(() => {
    // TODO Open each window only if it wasn't previouslt open so that the windows are not open when the user access a website, but when he clicks on a word.
    // TODO Make this a Google Chrome plugin

    let wordReference = null;
    let googleTranslate = null;
    let down = false;
    let move = false;
    let up = false;
    let x = 0;
    let y = 0;

    $('body > section > div:nth-child(2) > div > div > div.content.wl > div.content-center.wl > p')
    .mousedown(function (e) {
        x = e.offsetX;
        y = e.offsetY;
        down = true;
    })
    .mousemove(function (e) {
        if(!down || (e.offsetX == x && e.offsetY == y)) {
            move = false;
            return;
        }
        move = true;
    })
    .mouseup(function () {
        if(down && move) {
            if(!googleTranslate) {
                googleTranslate = window.open(
                    `https://translate.google.com/?source=osdd#view=home&op=translate&sl=en&tl=es&text=${
                        encodeURIComponent(window.getSelection().toString())
                    }`,
                    'googleTranslate',
                    'width=300,height=250'
                );
            } else {
                googleTranslate.location.replace(
                    `https://translate.google.com/?source=osdd#view=home&op=translate&sl=en&tl=es&text=${
                        encodeURIComponent(window.getSelection().toString())
                    }`
                );
            }
            googleTranslate.focus();
            down = false;
            move = false;
            up = true;
            return;
        }
    })
    .click(function () {
        if(up) {
            up = false;
            return;
        }
        let sel = window.getSelection();
        let text = sel.anchorNode.nodeValue;
        let word = getWordAt(text, sel.anchorOffset);
        // TODO: Use screen.width, screen.height to get the size of the screen
        // and then use top, left, width and height to put the new popup in the
        // correct place with the correct size. You should be able to configure
        // the plugin to select whether you want the popup in the left or right
        // side of the screen too.
        // You should be able to automatically get width, height and size of the
        // popup automatically with a button that fills those fields by using the
        // current values of the popup.
        if(!wordReference) {
            wordReference = window.open(
                `http://wordreference.com/definition/${word}`,
                'wordReference',
                'width=300,height=250'
            );
        } else {
            wordReference.location.replace(`http://wordreference.com/definition/${word}`);
        }
        wordReference.focus();
    });
})

function getFirstCharacters(text) {
    return text.slice(0, text.search(/[^\w]/));
}

function getLastCharacters(text) {
    return text.slice(text.search(/\w+$/));
}

function getWordAt(text, index) {
    return getLastCharacters(text.slice(0, index)) +
        getFirstCharacters(text.slice(index))
}

})( jQuery );