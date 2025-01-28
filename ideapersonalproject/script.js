function updateClock() {
    let DateObj = new Date();
    let seconds = String(DateObj.getSeconds()).padStart(2, '0');
    let minutes = String(DateObj.getMinutes()).padStart(2, '0');
    let hours = String(DateObj.getHours()).padStart(2, '0');
    let result = hours + ":" + minutes + ":" + seconds; 
    document.getElementById("show").innerHTML = result;
}
setInterval(updateClock, 1000);
updateClock();

