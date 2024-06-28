function appendCharacter(char) {
    const display = document.getElementById('display');
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    if (display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
