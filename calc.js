let a = ''; // Первое число
let b = ''; // Второе число
let sign = ''; // Знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']; // Массив значений
const action = ['-', '+', 'X', '/', '%', '+/-']; // Массив операций

const out = document.querySelector('.calc-screen p'); // Экран

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return; // Нажатие не на кнопку
    if(event.target.classList.contains('ac')) return; // Нажата кнопка AC

    out.textContent = '';
    const key = event.target.textContent; // Получаем нажатую кнопку

    if (digit.includes(key)) {  // Если нажата кнопка 0-9 или .
        if (b ==='' && sign === '') {
        a += key;
        out.textContent = a;
    }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out,textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b , sign);
        return;
    }


        if (action.includes(key)) {     // Если нажаты кнопки + - / X
            sign = key;
            out.textContent = sign;
            console.table(a, b , sign);
            return;
        }


        if (key === '=') {      // Если нажата кнопка =
            if (b ==='') b = a;
            switch (sign) {
                case "+":
                    a = (+a) + (+b);
                    break;
                case "-":
                    a = a - b;
                    break;
                case "X":
                    a = a * b;
                    break;
                case "/":
                    if (b === '0') {
                        out.textContent = 'Ошибка';
                        a = '';
                        b = '';
                        sign = '';
                        return;
                    }
                    a = a / b;
                    break;
                case "%":
                    a = a * b / 100;
                    break;
                case "+/-":
                    a = a * -1;
                    break;
            }
            finish = true;
            out.textContent = a;
            console.table(a, b, sign);
        }

}