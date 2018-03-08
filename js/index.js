$(document).ready(() =>{

    let activity = $('#activity');
    let container = $('#container');
    let start = $('#start');

    let drag = $('#drag');

    drag.on('change', () => {
        let file = drag.prop('files')[0];
        let reader = new FileReader();
        reader.onload = function() {
            let matrix = new Matrix(this.result);
            let basic = new BasicVariables(this.result);

            if (matrix.canShow){  // Если введеные данные валидны
                start.html(generateTable(matrix));
                activity.css('top', '-70%');
                start.css('width', '100%');
            } else {
                return;
            }
            container.append(generateBasics(basic));

            let chips = $('#chips');
            chips.css('border-bottom', '0');
            chips.css('margin', '0');
            chips.css('min-height', '0');

            // Todo
            //chips.material_chip();
            chips.on('chip.select', function(e, chip){
                console.log('HHEE');
            });

            let next = $('#next');

            next.on('click', function () {
                next.html();
                let gauss = new GaussianElimination(matrix, basic);
                container.append(result(gauss.solve()));
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