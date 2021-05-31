const black = document.getElementById('black');
const grey = document.getElementById('grey');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
var cpactive = false;

black.addEventListener('click', (e) => {
    color = 'black';
    console.log("black");
})
grey.addEventListener('click', (e) => {
    color = 'grey';
    console.log("grey");
})
red.addEventListener('click', (e) => {
    color = 'red';

})
blue.addEventListener('click', (e) => {
    color = 'blue';
})
green.addEventListener('click', (e) => {
    color = 'green';
})

colorEl.addEventListener('click', (e) => {
    let cp = document.getElementById("color-palette");
    if (cpactive) {
        console.log("Palette deactive");
        cpactive = false;
        cp.hidden = true;
    } else {
        console.log("Palette active");
        cp.hidden = false;
        cpactive = true;
        document.getElementById("color-palette").style.zIndex = '20';
    }

})