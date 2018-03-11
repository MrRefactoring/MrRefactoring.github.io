let lang = navigator.language;

function file_toast() {
    switch (lang){
        default: return 'Cannot read file';
        case 'ru': return 'Невозможно прочитать файл';
    }

}

function basic_title() {
    switch (lang){
        default: return 'Select basic variables';
        case 'ru': return 'Выберите базисные переменные';
    }
}

function basic_description() {
    switch (lang){
        default: return 'You can choose not all basic variables. Missing ones are selected automatically';
        case 'ru': return 'Можно выбрать не все базисные переменные, они подберутся автоматически';
    }
}


function basic_name() {
    switch (lang){
        default: return 'Basic variables';
        case 'ru': return 'Базисные переменные';
    }
}

function result_name() {
    switch (lang){
        default: return 'Results';
        case 'ru': return 'Результат';
    }
}

function invalid_format() {
    switch (lang){
        default: return 'Invalid data format';
        case 'ru': return 'Неверный формат данных';
    }
}

function gauss_error() {
    switch (lang){
        default: return 'The Gaussian method is not applicable';
        case 'ru': return 'Метод Гаусса неприменим';
    }
}

function index_error(index) {
    switch (lang){
        default: return `Variable with index ${index} does not exist in this context`;
        case 'ru': return `Переменная с индексом ${index} не существует в данном контексте`;
    }
}

function max_error() {
    switch (lang){
        default: return 'The maximum number of basic variables has already been chosen';
        case 'ru': return 'Уже выбрано максимальное количество базисных переменных';
    }
}

function variable_exist() {
    switch (lang){
        default: return 'This variable already exists in the constraint list';
        case 'ru': return 'Данная переменная уже имеется в списке ограничений';
    }
}

function index_bounded() {
    switch (lang){
        default: return 'The entered index is outside the allowed limits';
        case 'ru': return 'Введенный индекс выходит за допустимые границы';
    }
}

function not_exist() {
    switch (lang){
        default: return 'This variable is not in the constraint list';
        case 'ru': return 'Данная переменная не имеется в списке ограничений';
    }
}

function matrix_text() {
    switch (lang){
        default: return 'Initial matrix';
        case 'ru': return 'Исходная матрица';
    }
}

function select_text() {
    switch (lang){
        default: return 'Drag the file here or select manually';
        case 'ru': return 'Перетащите файл сюда или выберите вручную';
    }
}