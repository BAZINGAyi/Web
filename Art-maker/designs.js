let tableColor;

function makeGrid() {

    // get width and high
    let tableLength = document.getElementById("input_height").value;
    let tanleWidth = document.getElementById('input_width').value;

    // create table
    const table = document.getElementById('pixel_canvas');
    table.innerHTML = '';

    for (let i = 0; i < tableLength; i++) {
        // insert <tr>
        const row = table.insertRow(i);

        for (let j = 0; j < tanleWidth; j++) {
            // insert <td>
            const cell = row.insertCell(j);
            cell.addEventListener('mouseover', function(e) {
                if (e.which === 1) {
                    cell.style.backgroundColor = tableColor;
                }
            });
        }
    }
}

// user tap submit
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
});

// change table color
const colorPicker = document.getElementById("colorPicker");
tableColor = colorPicker.value;
colorPicker.addEventListener('change', function() {
    tableColor = colorPicker.value;
});