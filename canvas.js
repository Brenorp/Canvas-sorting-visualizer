
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const arraySize = 25;
let pointer = 0;

let rectArray =[];
rectArray = createArray(arraySize);


let source = animate;
requestAnimationFrame(source);

function animate() {
    
    drawSorting(pointer, iterator); 


    bubbleSort();
    [pointer, iterator] = bubbleSortIterator(pointer, iterator);


    if (iterator == -1) { //reset array + delay call
        drawSorted();
        
        rectArray = createArray(25);//reset array

        source = delay; //animation delay function
    }

    requestAnimationFrame(source);
}





function drawSorted() {
    let x = 100;
    for (var i = 0; i < rectArray.length; i++) { //draw finished array
        context.fillStyle = 'rgba(0, 255, 0, 1)';
        context.fillRect(x, 300, 10, (rectArray[i]) * -1);
        x = x + 12;
    }
}

function drawSorting() {
    let x = 100; //x axis window position
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < rectArray.length; i++) {
        if (i == pointer) { 
            context.fillStyle = 'rgba(0, 0, 255, 0.75)';
        } else if (i <= iterator + 1) {
            context.fillStyle = 'rgba(0, 255, 0, 0.25)';
        } else {
            context.fillStyle = 'rgba(0, 255, 0, 1)';
        }
        context.fillRect(x, 300, 10, (rectArray[i]) * -1);
        x = x + 12;
    } //end of draw frame block

}

function bubbleSortIterator() {
    if (pointer < iterator) { //bubblesort iteration
        pointer++;
        return [pointer, iterator];
    }
        iterator--;
        pointer = 0;
        return [pointer, iterator];
    
}

function bubbleSort() {
    if (rectArray[pointer] > rectArray[pointer + 1]) { //bubblesort algorithm
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

    iterator = array.length - 2;

    return array.map(()=>parseInt(Math.random() * 100, 10));

}

