/* Script for index file. */

function applyStyle() {
    var selectedStyle = document.getElementById("styleSelector").value;
    document.getElementById("selectedStyle").setAttribute("href", selectedStyle);
}