var loadFile = function (event) {
    var puzzleImage = document.getElementById('puzzleImage');
    var actualImage = document.getElementById('actualImage');
    source = URL.createObjectURL(event.target.files[0]);
    puzzleImage.src = source;
    actualImage.src = source;
};
