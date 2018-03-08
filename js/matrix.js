class Matrix{

    constructor(data){
        this.matrix = [];  // создаем пустую матрицу
        this.canShow = true;
        this.parse(data);  // парсим пришедшие данные
    }

    parse(data){
        let n = parseInt(data.split('\n')[0].split(' ')[0]);  // размерность по y
        let m = parseInt(data.split('\n')[0].split(' ')[1]);  // размерность по x
        let rows = data.split('\n').slice(1);  // строки матрицы

        if (n >= m){  // если кол-во строк больше или равно кол-ву столбцов
            this.canShow = false;
            this.error('Переменных меньше, чем ограничений');
            return;
        }

        for (let y = 0; y < n; y++){
            let columns;
            try {
                columns = rows[y].split(' ');  // столбцы в строке с индексом y
            } catch (e) {
                this.canShow = false;
                this.error();
                return;
            }

            for (let x = 0; x < m; x++){
                columns[x] = parseInt(columns[x]);
            }
            if (columns.includes(NaN)){  // Если в ходе разбора оказалось так, что размерность не соблюдена
                this.canShow = false;
                this.error();  // То говорим пользователю, что он допустил ошибку и перезагружаем страницу
                return;
            }
            this.matrix[y] = columns.slice(0, m);
        }
    }

    error(message){
        if (message === undefined)
            Materialize.toast('Неверный формат данных', timeout, 'rounded');
        else
            Materialize.toast(message, timeout, 'rounded');
        setTimeout(() => {
            location.reload(false);
        }, timeout);
    }

}