const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const ctx = canvas.getContext('2d');
const gline = document.getElementById("gridline");
const pp = document.getElementById("popup");
const erase = document.getElementById("eraser");
const pencil = document.getElementById("pen_pencil");


let size = 5
let erase_size = 20
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y
let gl = false;
let pen = true;
let eraser = false;

resize();
removeProperty();

function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

erase.addEventListener('click', (e) => {
    console.log("Eraser Active");
    pen = false;
    eraser = true;

})
canvas.addEventListener('mousedown', (e) => {
    if (eraser == true) {
        isPressed = true
        x = e.offsetX
        y = e.offsetY
    }
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})


function removeProperty() {
    element =
        document.styleSheets[0].cssRules[4].style;
    element.removeProperty('background-image');
}

function setProperty() {
    element =
        document.styleSheets[0].cssRules[4].style;
    element.setProperty('background-image', 'linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px)');
}

gline.addEventListener('click', (e) => {
    if (gl == false) {

        pp.style.height = "20px";
        gl = true;
        setProperty();
        setTimeout(function() {
            pp.style.height = "0px";
        }, 5000);
    } else {
        removeProperty();
        gl = false;
    }
})

pencil.addEventListener('click', (e) => {
    console.log("Eraser deactive");
    pen = true;
    eraser = false;

})

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey) {
        isPressed = true

        x = e.offsetX
        y = e.offsetY
    }
})

document.addEventListener('keyup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    if (eraser)
        ctx.globalCompositeOperation = "destination-out";
    else
        ctx.globalCompositeOperation = "source-over";
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}


increaseBtn.addEventListener('click', () => {
    size += 5

    if (size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if (size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

function check() {
    console.log("Working");
}