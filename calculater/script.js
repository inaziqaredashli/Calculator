const screen = document.querySelector('.screen')
let screenNumber = "0"
screen.innerHTML = screenNumber;
function printOnScreen(x) {
    let helper = '';
    if (x === 'x') {
        if (screenNumber.length > 3) {
            helper = (+screenNumber).toLocaleString()
            screen.innerHTML = helper + '.'
             screen.innerHTML = screenNumber
        }
            } 
   
     

    function setNum(x) {
        if (screenNumber === '0') {
            screenNumber = ''
        }
        screenNumber = screenNumber + x;
        printOnScreen(x);
        } }