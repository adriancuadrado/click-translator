// ==UserScript==
// @name         Click Translator
// @namespace    https://github.com/adriancuadrado/click-translator
// @version      1.0
// @description  try to take over the world!
// @author       adriancuadradochavarria97@gmail.com
// @grant        none
// @downloadURL  https://github.com/adriancuadrado/click-translator/raw/master/click-translator.user.js
// @updateURL    https://github.com/adriancuadrado/click-translator/raw/master/click-translator.user.js
// ==/UserScript==

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(() => {
    let config = {
        top: 100,
        left: 100,
        width: 1000,
        height: 1000,
        language: 'es'
    };

    let wordReference = null;
    let googleTranslate = null;

    document
    .querySelectorAll('p')
    .forEach(e => e.addEventListener('mouseup',
        function () {
            let selection = window.getSelection();
            let selectedText = selection.toString();
            if (selectedText) {
                if (!googleTranslate || googleTranslate.closed) {
                    googleTranslate = window.open(
                        `https://translate.google.com/?source=osdd#view=home&op=translate&sl=en&tl=${config.language}&text=${
                        encodeURIComponent(selectedText)
                        }`,
                        'GoogleTranslate',
                        `top=${config.top},left=${config.left},width=${config.width},height=${config.height}`
                    );
                } else {
                    googleTranslate.location.replace(
                        `https://translate.google.com/?source=osdd#view=home&op=translate&sl=en&tl=${config.language}&text=${
                        encodeURIComponent(selectedText)
                        }`
                    );
                }
                googleTranslate.focus();
                return;
            } else {
                let text = selection.anchorNode.nodeValue;
                let word = getWordAt(text, selection.anchorOffset);
                if (word) {
                    if (!wordReference || wordReference.closed) {
                        wordReference = window.open(
                            `http://wordreference.com/definition/${word}`,
                            'WordReference',
                            `top=${config.top},left=${config.left},width=${config.width},height=${config.height}`
                        );
                    } else {
                        wordReference.location.replace(`http://wordreference.com/definition/${word}`);
                    }
                    wordReference.focus();
                }
            }
        }));

    function getFirstCharacters(text) {
        return text.slice(0, text.search(/[^\w]/));
    }

    function getLastCharacters(text) {
        let index = text.search(/\w+$/);
        if (index == -1) {
            return '';
        }
        return text.slice(index);
    }

    function getWordAt(text, index) {
        return getLastCharacters(text.slice(0, index)) +
            getFirstCharacters(text.slice(index))
    }

});
