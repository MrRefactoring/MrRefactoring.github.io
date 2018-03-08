function generateTable(matrix) {
    let header = '';
    for (let i = 0; i < matrix.matrix[0].length - 1; i++){
        header += '<th>x{0}</th>'.format(i + 1);
    }
    header += '<th>result</th>';

    let body = '';
    for (let y = 0; y < matrix.matrix.length; y++){
        body += '<tr>';
        for (let x = 0; x < matrix.matrix[y].length; x++){
            body += '<td>{0}</td>'.format(matrix.matrix[y][x]);
        }
        body += '</tr>';
    }
    return '<span>Введенная матрица</span><table class="striped centered"><thead><tr>{0}</tr></thead><tbody>{1}</tbody></table>'.format(header, body);
}

function generateBasics(basics) {

    let body = '';
    for (let i = 0; i < basics.max; i++){
        if (basics.basicVars.includes(i)){
            body += '<div class="chip selected">x{0}</div>'.format(i.toString());
        } else {
            body += '<div class="chip">x{0}</div>'.format(i.toString());
        }
    }

    return '<div class="card-panel" style="text-align: center"><div class="chips" id="chips">{0}</div><a class="btn-floating btn waves-effect waves-light red" id="next"><i class="material-icons">navigate_next</i></a></div>'.format(body);

}

function result(matrix) {
    let header = '';
    for (let i = 0; i < matrix.matrix[0].length - 1; i++){
        header += '<th>x{0}</th>'.format(i + 1);
    }
    header += '<th>result</th>';

    let body = '';
    for (let y = 0; y < matrix.matrix.length; y++){
        body += '<tr>';
        for (let x = 0; x < matrix.matrix[y].length; x++){
            body += '<td>{0}</td>'.format(matrix.matrix[y][x].toString());
        }
        body += '</tr>';
    }
    return '<div class="card-panel"><span>Результат</span><table class="striped centered"><thead><tr>{0}</tr></thead><tbody>{1}</tbody></table></div>'.format(header, body);
}