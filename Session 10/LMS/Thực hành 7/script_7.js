function upArrowPressed() {
    let element= document.getElementById("Nobita");
    element.style.top = parseInt(element.style.top) - 5+'px';

}
function downArrowPressed() {
    let element= document.getElementById("Nobita");
    element.style.top = parseInt(element.style.top) + 5+'px';

}
function leftArrowPressed() {
    let element= document.getElementById("Nobita");
    element.style.left = parseInt(element.style.left) - 5+'px';

}
function rightArrowPressed() {
    let element= document.getElementById("Nobita");
    element.style.right = parseInt(element.style.right) + 5+'px';

}
document.addEventListener ('keydown',(evt) => {
const key = evt.key;

    switch (key) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
});
function docReady() {
    window.addEventListener('keydown', moveSelect)
}
