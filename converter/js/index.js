$(document).ready(() => {

    let input = $('#input');
    let output = $('#output');
    let convert = $('#convert');

    convert.on('click', () => {

        output.val(input.val().replace(/"/g, '\''))

    });

});