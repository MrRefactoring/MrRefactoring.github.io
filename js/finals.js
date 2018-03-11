function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let color = ['lime', 'amber', 'grey', 'yellow', 'indigo lighten-3'][getRandomInt(0, 5)];  // Цвет интерфейса

let approved = 'assignment_turned_in';  // material icon
let touch = 'touch_app';  // material icon
let next = 'navigate_next';  // material icon
let check = 'check_circle';  // material icon
let work = 'work';  // material icon
let vpn = 'vpn_key';  // material icon

let timeout = 3000;  // Миллисекунд для отображения тоста