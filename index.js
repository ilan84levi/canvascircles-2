function paintCanvas(height, width, radius, colorHex) {
    height = width
    var canvas = document.getElementById("myCanvas").getContext("2d");

    // Draw Circle:
    canvas.beginPath();
    canvas.arc(width, height, radius, 0, 2 * Math.PI); // x-center, y-center, radius, start-angle, end-angle
    canvas.strokeStyle = colorHex;
    canvas.stroke();

}

function randomHight() {
    var max = 600;
    var min = 0;
    for (var i = 1; i <= 1; i++) {
        height = parseInt(Math.random() * (max - min + 1) + min);

    }
    return height;
}

function randomWidth() {
    var max = 900;
    var min = 0;
    for (var i = 1; i <= 1; i++) {
        width = parseInt(Math.random() * (max - min + 1) + min);
    }
    return width;
}

function randomRadius() {
    var a = randomHight(),  
        b = randomWidth(); 
    var max;
    var min = 1;
    var tmp;
    if (a < b) {
        a = tmp;
        tmp = b;
        b = tmp;
    }

    max = tmp / 2;
    for (var i = 1; i <= 1; i++) {
        radius = parseInt(Math.random() * (max - min + 1) + min);
        document.getElementById("showRadius").innerText = radius;
        document.getElementById("showminNumber").innerText = tmp;
        return radius;

    }

}

function clearCanvas() {
    var myCanvas = document.getElementById("myCanvas").getContext("2d");
    myCanvas.clearRect(0, 0, 900, 600);
}

function makeRandomColor() {
    var colorHex = "#";
    var possible = "abcdef0123456789";

    for (var i = 0; i < 6; i++)
        colorHex += possible.charAt(Math.floor(Math.random() * possible.length + 1));
    document.getElementById("showHex").innerText = colorHex;
    return colorHex;
}

function parametersCalculate() {
    paintCanvas(randomHight(), randomWidth(), randomRadius(), makeRandomColor())
}

function timer() {
    setInterval(parametersCalculate, 800);
}

function stop() {
    var interval = setInterval(parametersCalculate, 800);
    clearInterval(interval, 0);
    clearInterval(timer, 0);
    clearInterval(paintCanvas, 0);
}