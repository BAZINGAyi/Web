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
            // user move mouse when tap left mouse button
            cell.addEventListener('mouseover', function(e) {
                if (e.which === 1) {
                    cell.style.backgroundColor = tableColor;
                }
            });
            // user tap left mouse button
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = tableColor;
            });
            // user double tap to recover default
            cell.addEventListener('dblclick', function() {
                cell.style.backgroundColor = HEXtoRGB("#ffffff")
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

// hex to rgb
function HEXtoRGB(hex) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}