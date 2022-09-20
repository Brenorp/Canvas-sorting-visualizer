
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

var arraySize = 25;
var pointer = 0;
var temp 
var source = animate;

createArray(arraySize);
requestAnimationFrame(source);

function animate() {
     //start of draw frame block
    var x = 100; //x axis window position
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < rectArray.length; i++) {
        if (i == pointer) {
            context.fillStyle = 'rgba(0, 0, 255, 0.75)';
        } else if (i <= iterator+1) {
            context.fillStyle = 'rgba(0, 255, 0, 0.25)';
        }else{
            context.fillStyle = 'rgba(0, 255, 0, 1)';
        }
        context.fillRect(x, 300, 10, (rectArray[i]) * -1);
        x = x + 12;
    } //end of draw frame block


    if (rectArray[pointer] > rectArray[pointer + 1]) {//bubblesort algorithm
        temp = rectArray[pointer + 1];
        rectArray[pointer + 1] = rectArray[pointer];
        rectArray[pointer] = temp;
    }

    if (pointer < iterator) {//bubblesort iteration
        pointer++;
    } else {
        iterator--;
        pointer = 0;
    }


    if (iterator == -1) { //reset array + delay call
        x = 100;
        for (var i = 0; i < rectArray.length; i++) {//draw finished array
            context.fillStyle = 'rgba(0, 255, 0, 1)';
            context.fillRect(x, 300, 10, (rectArray[i]) * -1);
            x = x + 12; 
        }

        createArray(25);//reset array

        source = delay; //animation delay function
    }

    requestAnimationFrame(source);
}

function delay() {
    

    setTimeout(() => source = animate, 1000); //one second delay


    requestAnimationFrame(source);
}

function createArray(arraySize) {
    rectArray = [];
    for (var i = 0; i < arraySize; i++) {
        rectArray.push(parseInt(Math.random() * 100, 10));
    }
    iterator = rectArray.length - 2;

}

