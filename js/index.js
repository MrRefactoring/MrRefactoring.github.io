$(document).ready(() => {

    function setCardHeight() {  // Метод для динамического изменения высоты основного контейнера
        let card = $('#card')[0];
        const child = card.children;
        const child1Height = child[0].getBoundingClientRect().height;
        const child2Height = child[1].getBoundingClientRect().height;
        card.style.maxHeight = `${child1Height + child2Height}px`;
    }

    function load(data) {
        let matrix = new Matrix(data);
        let basic_vars = new BasicVariables(data);
        let gauss = null;
        let freeze_change = false;  // При true блокирует изменения в базисных переменных

        if (!matrix.success_read) return;  // Если не удалось корректно считать данные

        $('#upload').text(approved);  // Меняем иконку у первого коллапса

        title.text(basic_title());  // Меняем заголовок
        description.text(basic_description());  // Меняем описание

        loader.html(table_generation(matrix));  // Выводим введенную матрицу
        content.append(chips_generation(basic_vars));  // Добавляем коллапс для базисных перменных

        $('.chip').on('click', function (e) {  // При нажатии на чипсы, добавляем базисные переменные
            let id = parseInt(e.target.innerText.split('x')[1]) - 1;
            if (!freeze_change && !e.target.classList.contains(color) && basic_vars.add(id)){
                e.target.classList.toggle(color);
            } else if (!freeze_change && e.target.classList.contains(color) && basic_vars.remove(id)){
                e.target.classList.toggle(color);
            }
        });

        $('#next').on('click', function () {
            freeze_change = true;

            $('.chip').css('cursor', 'default');
            $('.reload').css('opacity', 1);
            $('#touch').text(check);
            this.remove();

            gauss = new Gauss(matrix, basic_vars);
            content.append(`
            <li class="active">
                <div class="collapsible-header active">
                    <i class="material-icons">${work}</i>${result_name()}
                </div>
                <div class="collapsible-body active drag" style="display: block">
                    ${table_generation(gauss.solve())}
                </div>
            </li>`);

            // todo сделать еще вывод перменных

            paint();
            setCardHeight();
        });

        paint();
        setCardHeight();

    }

    function error() {
        Materialize.toast(file_toast(), timeout, 'rounded');
        setTimeout(() => {
            location.reload(false);
        }, timeout);
    }

    let title = $('#title');
    let description = $('#description');

    let content = $('#content');
    let loader = $('#loader');

    let drag = $('#drag');

    drag.on('change', () => {
        let reader = new FileReader();

        reader.onload = function(){load(this.result)};
        reader.onerror = function(){error()};

        reader.readAsText(drag.prop('files')[0])
    });

    $('.reload').on('click', () =>{
        location.reload(false);
    });

    $('#select_text').text(select_text());
    $('#source').text(matrix_text());

    paint();
    setCardHeight();  // Устанавливаем начальную высоту элементов

});