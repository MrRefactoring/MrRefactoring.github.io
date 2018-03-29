const jsonUrl = 'https://raw.githubusercontent.com/andrejewski/periodic-table/master/data.json';

$(document).ready(() => {

    let tableContent = $('#table-content');

    function tipContent(data) {
        return `
            <div class="tooltip">
               <span class="text">Атомный номер: ${data['atomicNumber']}</span><br>
               <span class="text">Название элемента: ${data['name']}</span><br>
               <span class="text">Атомная масса: ${data['atomicMass']}</span><br><br>
               <span class="text">Обозначение:</span><br><br>
               <span class="el">${data['symbol']}</span><br><br>
               <span class="text">Открыт в ${data['yearDiscovered']}</span>
            </div>
        `;
    }

    $.getJSON(jsonUrl, function (data) {
        console.log(data[0]);
        for (let y = 0; y < data.length % 18; y++){
            let content = '<tr>';
            for (let x = 0; x < 18; x++){
                try {
                content += `<td style="width: 5%; height: 5%" class="tooltipped" data-position="bottom" data-enable-html="true"
                                    data-tooltip='${tipContent(data[y * 18 + x])}'>
                                <div class="element card">
                                    <span class="name">${data[y * 18 + x]['atomicNumber']}</span><br>
                                    <span class="symbol">${data[y * 18 + x]['symbol']}</span><br>
                                    <span class="name">${data[y * 18 + x]['name']}</span><br>
                                </div>
                            <td>`;
                } catch (e){

                }
            }
            content += '</tr>';
            tableContent.append(content)
        }
        let tooltippeds = $('.tooltipped');
        tooltippeds.tooltip();
    });
});