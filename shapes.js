const rect = document.getElementById('rect');
const shape_edit = document.getElementById('shape_edit');
var sedit = false;
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');


resize2();

function resize2() {
    ctx2.canvas.width = window.innerWidth;
    ctx2.canvas.height = window.innerHeight;
}



shape_edit.addEventListener('click', (e) => {
    if (!sedit) {
        sedit = true;
        console.log("up/low");
        canvas2.style.zIndex = '-5';
    } else {
        canvas2.style.zIndex = '5';
        sedit = false;
    }
})