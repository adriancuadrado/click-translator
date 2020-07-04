$(() => {
    $('p').click(function () {
        let sel = window.getSelection();
        let text = sel.anchorNode.nodeValue;
        console.log(getWordAt(text, sel.anchorOffset));
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