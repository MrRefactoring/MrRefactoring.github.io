$(document).ready(() =>{

    let title = $('#title');
    let description = $('#description');

    let activity = $('#activity');
    let card = activity[0].children[0].children[0];
    function setCardHeight() {
        const child = card.children;
        const child1Height = child[0].getBoundingClientRect().height;
        const child2Height = child[1].getBoundingClientRect().height;
        card.style.maxHeight = `${child1Height + child2Height}px`;
    }
    setCardHeight();
    let container = $('#container');
    let start = $('#start');

    let drag = $('#drag');

    drag.on('change', () => {
        let file = drag.prop('files')[0];
        let reader = new FileReader();
        reader.onload = function() {
            let matrix = new Matrix(this.result);
            let basic = new Basic(this.result);

            if (!matrix.success) return;  // Если введеные данные не валидны

            title.text('Введите базисные перменные');
            description.text('Если выбраны не все базисные переменные, то они подберутся автоматически');

            start.html(tableGen(matrix, 'Введенная матрица'));
            start.css('width', '100%');
            container.append(basicGen(basic));

            let chips = $('#chips');
            let chip = $('.chip');
            let freeze = false;
            chips.css('border-bottom', '0');
            chips.css('margin', '0');
            chips.css('min-height', '0');

            setCardHeight();
            chip.on('click', function(e){
                if (freeze) return;
                let id = e.target.innerText.split('x')[1] - 1;
                if (!e.target.classList.contains('orange') && basic.add(id)){
                    e.target.classList.toggle('orange');
                } else if (e.target.classList.contains('orange') && basic.remove(id)){
                    e.target.classList.toggle('orange');
                }
            });

            let next = $('#next');

            next.on('click', function () {
                next.remove();
                freeze = true;
                $('.chip').css('cursor', 'default');
                let gauss = new GaussianElimination(matrix, basic);
                container.append(`<div class="card-panel">${tableGen(gauss.solve(), 'Результат')}</div>`);
                setCardHeight();
            })
        };
        reader.onerror = function() {
            Materialize.toast('Cannot read file', timeout, 'rounded');
            setTimeout(() => {
                location.reload(false);
            }, timeout)
        };
        reader.readAsText(file);
    });



});