class GaussianElimination{

    constructor(matrix, basics){
        this.matrix = matrix;
        this.basics = basics;
        this.basics.sort();
    }

    solve(){
        // Прямой ход
        for(let k = 1; k < this.basics.count; k++){
            for (let j = k; j < this.basics.count; j++){
                let m = this.matrix.matrix[j][k - 1] / this.matrix.matrix[k - 1][k - 1];
                for (let i = 0; i < this.matrix.matrix[0].length; i++){
                    this.matrix.matrix[j][i] = this.matrix.matrix[j][i] - m * this.matrix.matrix[k - 1][i];
                }
            }
        }
        // Обратный ход
        console.log(this.matrix.matrix);
        return this.matrix;
    }

}