class Gauss{

    constructor(matrix, basics_vars){
        this.basics = basics_vars;
        this.matrix = this.basics.sort(matrix);
    }

    solve(){
        // Прямой ход
        for(let k = 1; k < this.basics.length(); k++){
            for (let j = k; j < this.basics.length(); j++){
                let m = this.matrix.getEl(j, k - 1) / this.matrix.getEl(k - 1, k - 1);
                for (let i = 0; i < this.matrix.columns(); i++){
                    this.matrix.setEl(j, i, this.matrix.getEl(j, i) - m * this.matrix.getEl(k - 1, i));
                }
            }
        }
        // Обратный ход
        this.divLine(0, this.matrix.getEl(0, 0));  // Приводим первую строку к еденичному виду
        for (let y = this.matrix.rows() - 1; y > 0; y--){
            this.divLine(y, this.matrix.getEl(y, y));  // Приводим остальные строки к еденичному виду
            for (let i = 0; i < y; i++){
                this.minusLine(i, y, this.matrix.getEl(i, y));
            }
        }
        return this.basics.sort(this.matrix, true);
    }

    divLine(lineIndex, divider){  // Метод для деления строки матрицы на делитель
        for (let x = 0; x < this.matrix.columns(); x++){
            this.matrix.setEl(lineIndex, x, this.matrix.getEl(lineIndex, x) / divider);
        }
    }

    minusLine(from, to, multiplier = 1){
        for (let x = 0; x < this.matrix.columns(); x++){
            this.matrix.setEl(from, x, this.matrix.getEl(from, x) - this.matrix.getEl(to, x) * multiplier);
        }
    }

}