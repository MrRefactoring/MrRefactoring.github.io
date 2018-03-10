function tableGen(matrix, title) {
    let header = '';
    for (let i = 0; i < matrix.columns() - 1; i++){
        header += `<th>x${i + 1}</th>`;
    }
    header += '<th>result</th>';

    let body = '';
    for (let y = 0; y < matrix.rows(); y++){
        body += '<tr>';
        for (let x = 0; x < matrix.columns(); x++){
            body += `<td>${matrix.getEl(y, x)}</td>`;
        }
        body += '</tr>';
    }

    return `
        <span>${title}</span>
        <table class="striped centered">
            <thead>
                <tr>${header}</tr>
            </thead>
            <tbody>${body}</tbody>
        </table>
    `
}

function basicGen(basic) {
    let body = '';
    for (let i = 0; i < basic.max; i++){
        if (basic.includes(i)){
            body += `<div class="chip orange">x${i + 1}</div>`;
        } else {
            body += `<div class="chip">x${i + 1}</div>`;
        }
    }

    return `
    <div class="card-panel">
        <span>Базисные переменные</span>
        <div class="chips" id="chips">${body}</div>
        <a class="btn-floating btn waves-effect waves-light orange" id="next">
            <i class="material-icons">navigate_next</i>
        </a>
    </div>
    `
}