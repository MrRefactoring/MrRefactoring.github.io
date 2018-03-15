$(document).ready(() => {

    function toast(message) {
        Materialize.toast(message, 3000, 'rounded');
    }

    $('.btn-floating').addClass(color);

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });

    // Основные actions
    let photo = $('#photo');
    let load = $('#load');
    let accept = $('#accept');
    let send = $('#send');

    // Поля
    let name = $('#first_name');
    let last_name = $('#last_name');
    let email = $('#email');
    let birthday = $('#birthday');
    let about = $('#about');

    load.on('change', (e) =>{
        photo.attr('src',URL.createObjectURL(e.target.files[0]));
    });

    accept.on('click', () =>{
        send.toggleClass('disabled');
    });

    send.on('click', () => {

        if (name.val() === ''){
            toast("Вы забыли ввести имя");
        } else if (last_name.val() === ''){
            toast("Вы забыли ввести фамилию")
        } else if (email.val() === ''){
            toast("Вы забыли ввети email")
        } else if (birthday.val() === ''){
            toast("Вы забыли ввести дату рождения")
        } else if (about.val() === ''){
            toast("Вы забыли ввести о себе")
        } else {
            let year = parseInt(birthday.val().split(' ')[2]);
            if (year > 2018 - 18 || year < 2018 - 120){  // Делать нормальную проверку не хочется
                toast("Сожалеем, доступ на сайт разрешен лицам достигшим 18 лет")
            } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.val().toLowerCase())) {
                toast("Неверный формат email")
            } else {
                sendToServer(name.val(), last_name.val(), email.val(), about.val(), birthday.val());
                toast("Спасибо, что отправили мне свои персональные данные! 😘");
            }
        }
    });

});