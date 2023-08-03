function TextCount() {
    const _text = document.getElementById('text');
    const _textPrint = document.getElementById('textPrint');
    const _textCount = document.getElementById('textCount');
    let _reset = document.getElementById('reset');

    function loadAllEvents() {
        _text.addEventListener('input', textVal);
        _text.addEventListener('keydown', backspaceDelete);
        _reset.addEventListener('click', resetText);
    }

    function textVal() {
        _textPrint.innerText = _text.value;
        _textCount.innerText = _text.value.length;
    }

    function resetText() {
        _text.value = '';
        _textPrint.innerText = '';
        _textCount.innerText = '';
    }

    function backspaceDelete(e) {
        if (e.keyCode === 8) {
            _textPrint.innerText = '';
            _textCount.innerText = '';
        }

        else if(e.keyCode === 46) {
            _text.value = '';
            _textPrint.innerText = '';
            _textCount.innerText = '';
        }
    }

    loadAllEvents();
}

const textCount = new TextCount();