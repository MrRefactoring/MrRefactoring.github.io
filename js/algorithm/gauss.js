class Gauss{

    constructor(matrix, basics_vars){
        this.basics = basics_vars;
        this.matrix = this.basics.sort(matrix);
        this.vars = [];
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

        // фича. писать нормально не буду, так как фича
        for (let y = 0; y < this.matrix.rows(); y++){
            let res;
            if (this.matrix.getEl(y, this.matrix.rows()).toString().split('.').length > 1 && this.matrix.getEl(y, this.matrix.rows()).toString().split('.')[1].length >= 3){
                res = `x${this.basics.replace(y) + 1} = ${-this.matrix.getEl(y, this.matrix.rows()).toFixed(2)}x${this.basics.replace(this.matrix.rows()) + 1}`;
            } else {
                res = `x${this.basics.replace(y) + 1} = ${-this.matrix.getEl(y, this.matrix.rows())}x${this.basics.replace(this.matrix.rows()) + 1}`;
            }

            for (let x = this.matrix.rows() + 1; x < this.matrix.columns() - 1; x++){
                if (this.matrix.getEl(y, x) === 0) continue;
                if (this.matrix.getEl(y, this.matrix.rows()).toString().split('.').length > 1 && this.matrix.getEl(y, this.matrix.rows()).toString().split('.')[1].length >= 3){
                    res += ` ${Math.sign(this.matrix.getEl(y, x)) > 0 ? '-': '+'} ${Math.abs(this.matrix.getEl(y, x).toFixed(2))}x${this.basics.replace(x) + 1}`;
                } else {
                    res += ` ${Math.sign(this.matrix.getEl(y, x)) > 0 ? '-': '+'} ${Math.abs(this.matrix.getEl(y, x))}x${this.basics.replace(x) + 1}`;
                }
            }

            if (this.matrix.getEl(y, this.matrix.columns() - 1).toString().split('.').length > 1 && this.matrix.getEl(y, this.matrix.columns() - 1).toString().split('.')[1].length >= 3){
                res += ` ${Math.sign(this.matrix.getEl(y, this.matrix.columns() - 1)) > 0 ? '+': '-'} ${Math.abs(this.matrix.getEl(y, this.matrix.columns() - 1).toFixed(2))}`;
            } else {
                res += ` ${Math.sign(this.matrix.getEl(y, this.matrix.columns() - 1)) > 0 ? '+': '-'} ${Math.abs(this.matrix.getEl(y, this.matrix.columns() - 1))}`;
            }
            this.vars.push(res);
        }
        this.vars.sort();

        return this.basics.sort(this.matrix, true);
    }

    // фича
    variables(){
        let res = '';
        for (let index in this.vars){
            res += `<span>${this.vars[index]}</span><br>`;
        }
        return res;
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