const convert = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
    16: 'G',
    17: 'H',
    18: 'I',
    19: 'J',
    20: 'K',
    21: 'L',
    22: 'M',
    23: 'N',
    24: 'O',
    25: 'P',
    26: 'Q',
    27: 'R',
    28: 'S',
    29: 'T',
    30: 'U',
    31: 'V',
    32: 'W',
    33: 'X',
    34: 'Y',
    35: 'Z'
};

function getNewNumber(number, base){
    let splitting = [];
    while (number >= base){
        splitting.push(number % base);
        number = Math.floor(number / base);
    }
    splitting.push(number);
    let result = '';
    for (let i = splitting.length - 1; i >= 0; i--){
        result += `${convert[splitting[i]]}`;
    }
    return result;
}

$(document).ready(() => {

    let update = $('#update');

    let source_number = $('#source_number');
    let source_notation = $('#source_notation');
    let target_notation = $('#target_notation');

    let result = $('#result');

    update.on('click', () => {
        let number = parseInt(source_number.val().toUpperCase(), parseInt(source_notation.val()));  // Исходная цифра
        if (isNaN(number)){
            M.toast({html: 'Введенное число больше, чем система счисления', classes: 'rounded'});
            return;
        }
        let base = parseInt(target_notation.val());
        result.html(`Число в ${base} системе счисления: <b>` + getNewNumber(number, base) + '</b>');
    });

    source_notation.on('keyup', () => {
        source_notation.val(source_notation.val().replace(/[^0-9]+/g, ''))
    });

    source_notation.on('change', () => {
        if (parseInt(source_notation.val()) > 36 || parseInt(source_notation.val()) < 2){
            source_notation.val(10);
            M.toast({html: 'Выберите систему счисления от 2 до 36', classes: 'rounded'});
        }
    });

    target_notation.on('keyup', () => {
        target_notation.val(target_notation.val().replace(/[^0-9]+/g, ''));
    });

    target_notation.on('change', () => {
        if (parseInt(target_notation.val()) > 36 || parseInt(target_notation.val()) < 2){
            target_notation.val(10);
            M.toast({html: 'Выберите систему счисления от 2 до 36', classes: 'rounded'});
        }
    });

});