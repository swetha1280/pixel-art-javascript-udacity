//code to pick a color and apply in the grid
function pickColor() {
    // Select color input
    //gives the color  
    $('td').click(function(grid) { //click element
        var color =$colorPicker.val();
        $(grid.currentTarget).css("background-color", color);//grid bg color
    });
}
var $colorPicker = $('#colorPicker');//to pick color
var $gridElement = $('#pixelCanvas');
var $inputHeight = $('#inputHeight');//to define height of boxes or grid
var $inputWidth = $('#inputWidth');//to define width of the boxes or grid
var $sizePicker=$('#sizePicker');//pick the size
$sizePicker.submit(function(grid) {
    grid.preventDefault();
    var gridWidth = $inputWidth.val();//width function
    var gridHeight = $inputHeight.val();//height function
    makeGrid(gridHeight, gridWidth);
    pickColor();
});

// When size is submitted by the user, call makeGrid()
// code to make grid
// Select size input
function makeGrid(gridHeight, gridWidth) {
    $('tr').remove(); // to reset the grids
    for(var i = 0; i < gridHeight; i++) {//for loop for grid
        $gridElement.append('<tr></tr>');
    }
    for(var j = 0; j < gridWidth; j++) {// for loop for grid
        $('tr').append('<td></td>');
    }
}