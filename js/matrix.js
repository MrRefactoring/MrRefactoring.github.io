class Matrix{

    constructor(data){
        this.matrix = [];
        this.success = false;
        this.parse(data);
    }

    parse(data){
        try {
            data = data.split('\n');
            let n = data[0].split(' ')[0];
            let m = data[0].split(' ')[1];
            data = data.slice(1);

            if (n >= m){
                this.error('Метод Гаусса неприменим');
            }

            for (let y = 0; y < n; y++){
                let columns = data[y].split(' ').slice(0, m);
                for (let x = 0; x < m; x++){
                    columns[x] = parseInt(columns[x]);
                    if (isNaN(columns[x])){
                        this.error('Неверный формат данных');
                    }
                }
                this.matrix.push(columns);
            }
            this.success = true;
        } catch (e){
            this.error(e.toString());
        }
    }

    getEl(y, x){
        return this.matrix[y][x];
    }

    setEl(y, x, value){
        this.matrix[y][x] = value;
    }

    rows(){
        return this.matrix.length;
    }

    columns(){
        return this.matrix[0].length;
    }

    error(message){
        this.success = false;
        Materialize.toast(message, timeout, 'rounded');
        setTimeout(() => {
            location.reload(false);
        }, timeout)
    }

}