// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let tableColor;

function makeGrid() {
    genertateTable();
}

makeGrid();

function genertateTable() {
    // get width and high
    let tableLength = $('#input_height').val();
    let tanleWidth = $('#input_width').val();

    // create table
    let table = $('#pixel_canvas');
    table.html("");
    for (let i = 0; i < tableLength; i++) {

        let tr = $('<tr></tr>');
        table.append(tr);

        for (let j = 0; j < tanleWidth; j++) {
            tr.append('<td></td>');
        }
    }
}

$(function(){
   tableColor = $('#colorPicker').val();
})

// user tap submit
$( '#submit' ).on( 'click', function() {
    genertateTable();
});

$( '#pixel_canvas' ).on( 'mousemove', 'td', function(e) {

    if (e.which === 1){
        $(this).css('background-color', tableColor);
    }

});

$( '#colorPicker' ).on( 'change', function() {
    tableColor = $(this).val();
});


