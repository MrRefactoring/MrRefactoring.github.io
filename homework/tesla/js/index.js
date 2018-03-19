function clear_toast() {
    try {
        $('.toast').first()[0].M_Toast.remove();
    } catch (e){}
}

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function applause() {
    let array = ['Интересно', 'Круто', 'Отлично', 'Браво'];
    return array[randomInteger(0, array.length - 1)]
}

function toast(message) {
    clear_toast();
    let content = $(`<span>${message}</span>`)
        .add($(`<button class="btn-flat toast-action" onclick="clear_toast()">${applause()}</button>`));
    Materialize.toast(content, 100000, 'rounded');

}


$(document).ready(() => {
    let facial_light = $('#facial_lights');
    let facial_door = $('#facial_door');
    let facial_wheel = $('#facial_wheel');

    let rear_light = $('#rear_lights');
    let rear_door = $('#rear_door');
    let rear_wheel = $('#rear_wheel');

    facial_light.on('click', () => {
        toast(facial_lights_text)
    });

    facial_door.on('click', () => {
        toast(facial_door_text)
    });

    facial_wheel.on('click', () => {
        toast(facial_wheel_text)
    });

    rear_light.on('click', () => {
        toast(rear_lights_text)
    });

    rear_door.on('click', () => {
        toast(rear_door_text)
    });

    rear_wheel.on('click', () => {
        toast(rear_wheel_text)
    });

});