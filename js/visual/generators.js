function table_generation(matrix) {
    let header = '';
    for (let i = 0; i < matrix.columns() - 1; i++){
        header += `<th>x${i + 1}</th>`;
    }
    header += '<th>result</th>';

    let body = '';
    for (let y = 0; y < matrix.rows(); y++){
        body += '<tr>';
        for (let x = 0; x < matrix.columns(); x++){
            if (matrix.getEl(y, x).toString().split('.').length > 1 && matrix.getEl(y, x).toString().split('.')[1].length >= 3){
                body += `<td>${matrix.getEl(y, x).toFixed(2)}</td>`;
            } else {
                body += `<td>${matrix.getEl(y, x)}</td>`;
            }
        }
        body += '</tr>';
    }

    return `
        <table class="striped centered">
            <thead>
                <tr>${header}</tr>
            </thead>
            <tbody>${body}</tbody>
        </table>
    `
}

function chips_generation(basic_vars) {
    let body = '';
    for (let i = 0; i < basic_vars.max; i++){
        if (basic_vars.includes(i)){
            body += `<div class="chip COLORMARKER">x${i + 1}</div>`;
        } else {
            body += `<div class="chip">x${i + 1}</div>`;
        }
    }

    return `
    <li class="active">
        <div class="collapsible-header active">
            <i class="material-icons" id="touch">${touch}</i>${basic_name()}
        </div>
        <div class="collapsible-body active drag" style="display: block">
            <div class="chips" style="border-bottom: 0; margin: 0; min-height: 0; cursor: default">${body}</div>
            <a class="btn-floating btn waves-effect waves-light" id="next">
            <i class="material-icons">${next}</i>
        </a>
        </div>
    </li>
    `
}