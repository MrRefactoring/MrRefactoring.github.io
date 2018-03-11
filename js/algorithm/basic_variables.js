class BasicVariables{

    constructor(data){
        this.basic = [];
        this.max = 0;  // Кол-во потенциально базовых переменных
        this.target = 0;  // Сколько базовых переменных вообще можно выбрать
        this.movement = {};
        this.parse(data);
    }

    parse(data){
        data = data.split('\n');
        this.max = parseInt(data[0].split(' ')[1]) - 1;
        this.target = parseInt(data[0].split(' ')[0]);
        data = data.slice(this.target + 1);
        for (let i = 0; i < this.target; i++)
            if (data[i] === undefined || !this.add(parseInt(data[i]))) break;
    }

    add(index){
        if (index > this.max){
            BasicVariables.notification(index_error(index));
            return false;
        }
        if (this.length() >= this.target){
            BasicVariables.notification(max_error());
            return false;
        }
        if (this.includes(index)){
            BasicVariables.notification(variable_exist());
            return false;
        }
        this.basic.push(index);
        return true;
    }

    remove(index){
        if (index > this.max){
            BasicVariables.notification(index_bounded());
            return false;
        }
        if (!this.includes(index)){
            BasicVariables.notification(not_exist());
            return false;
        }
        this.basic = this.basic.slice(0, this.basic.indexOf(index)).concat(this.basic.slice(this.basic.indexOf(index) + 1));
        return true;
    }

    length(){
        return this.basic.length;
    }

    sort(matrix, reverse = false){
        if (!reverse){
            // Дополняем базисные переменные до полного комплекта
            if (this.length() < this.target){
                for (let i = 0; i < this.target; i++){
                    if (!this.includes(i) && this.length() < this.target){
                        this.add(i);
                    }
                }
            }
            this.basic.sort();  // Сортируем базисные переменные
            for (let i = 0; i < this.length(); i++){  // Проходим каждую переменную в базисах
                if (this.basic[i] < this.target) continue;  // Если базисная перменная уже в начале (подходит нам)
                for (let j = 0; j < this.target; j++){  // Пытаемся найти место в начале матрицы
                    if (!this.includes(j)){  // Если место вакантно
                        for (let y = 0; y < matrix.rows(); y++){  // Меняем столбцы в матрице местами
                            let temp = matrix.getEl(y, this.basic[i]);
                            matrix.setEl(y, this.basic[i], matrix.getEl(y, j));
                            matrix.setEl(y, j, temp);
                        }
                        this.movement[this.basic[i]] = j;  // Делаем запись о том, куда мы перенесли столбики
                        this.remove(this.basic[i]);  //Удаляем заменненый элемент из базисных переменных
                        this.add(j);  // Добавляем новое место базисной переменной
                        this.basic.sort();  // Сортируем базисные переменные
                        break;  // Выходим из цикла и переходим к следующей базисной переменной
                    }
                }
            }
        } else {
            // Приводим матрицу к первозданному виду
            for (let key in this.movement){
                for (let y = 0; y < matrix.rows(); y++){
                    let temp = matrix.getEl(y, this.movement[key]);
                    matrix.setEl(y, this.movement[key], matrix.getEl(y, key));
                    matrix.setEl(y, key, temp);
                }
            }
        }
        return matrix;
    }

    includes(variables){
        return this.basic.includes(variables);
    }

    // фича. нормально писать не буду так как фича
    replace(index){
        if (this.movement[index] !== undefined){
            return parseInt(this.movement[index]);
        }
        for (let key in this.movement){
            if (this.movement[key] === index){
                return parseInt(key);
            }
        }
        return index;
    }

    static notification(message){
        Materialize.toast(message, timeout, 'rounded');
    }

}