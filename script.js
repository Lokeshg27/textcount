function element(selector) {
    return document.getElementById(selector);
}
const _text = element('text');
const _textPrint = element('textPrint');
const _textCount = element('textCount');
const _reset = element('reset');

const loadAllEvents = () =>{
    _text.addEventListener('input', textVal);
    _reset.addEventListener('click', resetText);
}

const textVal = () => {
    _textPrint.innerText = _text.value;
    _textCount.innerText = _text.value.length;
    let valueLength = _text.value.length;
    if (valueLength === 0) {
        _textCount.innerText = '';
    } else {
        _textCount.innerText = valueLength;
    }
}

 const resetText = () => {
    _text.value = '';
    _textPrint.innerText = '';
    _textCount.innerText = '';
}

loadAllEvents();
