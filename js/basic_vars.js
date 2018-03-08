class BasicVariables{

    constructor(data){
        this.basicVars = [];
        this.count = 0;
        this.max = 0;
        this.parse(data)
    }

    parse(data){
        this.count = parseInt(data.split('\n')[0].split(' ')[0]);
        this.max = parseInt(data.split('\n')[0].split(' ')[1]);
        data = data.split('\n').slice(this.count + 1);
        for (let i = 0; i < this.count; i++){
            if (data[i] === undefined)
                break;
            if (data[i] <= this.max && this.basicVars.length < this.count)
                this.basicVars.push(parseInt(data[i]));
            else{
                this.notification();
                break;
            }
        }
    }

    sort(reverse){  // Если reverse == true, то сортируем к исходной матрице, иначе сортируем по базисным переменным
        if (reverse){

        } else {

        }
    }

    add(el){  // Добавляет элемент в список

    }

    overflow(){  // Возвращает true если можно добавлять базисные пременные в список
        return this.basicVars < count;
    }

    notification(){
        Materialize.toast('Некоторые базисные переменные заданы неправильно', timeout, 'rounded');
    }

}