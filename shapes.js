const rect = document.getElementById('rect');
const circle = document.getElementById('circle');
const shape_edit = document.getElementById('shape_edit');
var sedit = false;

shape_edit.addEventListener('click', (e) => {
    if (!sedit) {
        sedit = true;
        canvas.style.zIndex = '0';
    } else {
        canvas.style.zIndex = "10";
        sedit = false;
    }
})