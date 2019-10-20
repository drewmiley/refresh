let number = Math.random();
let result = '1';
while (number > 0.9) {
    result += '0';
    number = (number * 10) % 1;
}

document.getElementById('random').innerText = result;
