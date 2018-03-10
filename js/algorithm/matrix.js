class Matrix{

    constructor(data){
        this.matrix = [];
        this.success_read = false;
        this.parse(data);
    }

    parse(data){
        try {
            data = data.split('\n');
            let n = parseInt(data[0].split(' ')[0]);
            let m = parseInt(data[0].split(' ')[1]);
            data = data.slice(1);

            if (n >= m){
                this.error(gauss_error());
            }

            for (let y = 0; y < n; y++){
                let columns = data[y].split(' ').slice(0, m);
                for (let x = 0; x < m; x++){
                    columns[x] = parseInt(columns[x]);
                    if (isNaN(columns[x])){
                        this.error(invalid_format());
                    }
                }
                this.matrix.push(columns);
            }
            this.success_read = true;
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
        this.success_read = false;
        Materialize.toast(message, timeout, 'rounded');
        setTimeout(() => {
            location.reload(false);
        }, timeout)
    }

}