$(document).ready(() => {

    let table = $('#table');
    table.editableTableWidget();

    let result = $('#result');

    $('#consider').on('click', () => {

        let support_element = Fraction($('#support').text());  // Опорный элемент
        let rb_support = Fraction($('#for_support').text());  // По диагонали к опорному
        let right = Fraction($('#right').text());  // Справа от опорного
        let bottom = Fraction($('#bottom').text());  // Снизу от опорного

        result.text(support_element.mul(rb_support).sub(right.mul(bottom)).toFraction());



    });

});