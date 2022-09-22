
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const arraySize = 25;
let pointer = 0;
let iterator = arraySize - 2;
let rectArray =[];
rectArray = createArray(arraySize);


let source = animate;
requestAnimationFrame(source);

function animate() {
    
    drawSorting(pointer, iterator); 


    bubbleSort();

    [pointer, iterator] = bubbleSortIterator(pointer, iterator);


    if (iterator == -1) {
        drawSorted();

        iterator = arraySize -2;
        rectArray = createArray(arraySize);

        source = delay;
    }

    requestAnimationFrame(source);
}





function drawSorted() {
    let xPos = 100;
    for (var i = 0; i < rectArray.length; i++) {
        context.fillStyle = 'rgba(0, 255, 0, 1)';
        context.fillRect(xPos, 300, 10, (rectArray[i]) * -1);
        xPos = xPos + 12;
    }
}

function drawSorting() {
    let xPos = 100;
    context.clearRect(0, 0, innerWidth, innerHeight); //clean canvas
    for (var i = 0; i < rectArray.length; i++) {
        switch(true){
            case (i == pointer):
                context.fillStyle = 'rgba(0, 0, 255, 0.75)'; //blue bar
                break;

            case(i <=iterator+1):
                context.fillStyle = 'rgba(0, 255, 0, 0.25)'; //light green bar
                break;

            default:
                context.fillStyle = 'rgba(0, 255, 0, 1)'; //green bar
        }
        
        context.fillRect(xPos, 300, 10, (rectArray[i]) * -1);
        xPos = xPos + 12;
    }

}

function bubbleSortIterator() {
    if (pointer < iterator) {
        pointer++;
        return [pointer, iterator];
    }
        iterator--;
        pointer = 0;
        return [pointer, iterator];
    
}

function bubbleSort() {
    if (rectArray[pointer] > rectArray[pointer + 1]) {
        const temp = rectArray[pointer + 1];
        rectArray[pointer + 1] = rectArray[pointer];
        rectArray[pointer] = temp;
    }
}

function delay() {
    

    setTimeout(() => source = animate, 1000); //one second delay


    requestAnimationFrame(source);
}

function createArray(arraySize) {
    let array = [];
    array = Array(arraySize).fill(0);

    return array.map(()=>parseInt(Math.random() * 100, 10));
}

