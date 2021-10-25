const squareElement =  document.getElementById("container-square");

for( let i = 1; i <= 100; i++){
    
    // prima condizione Fizz
    if(i % 3 == 0){
        squareElement.innerHTML += `<div class="square fizz">fizz</div>`;
    }
    // seconda condizione buzz
    else if(i % 5 == 0){
        squareElement.innerHTML += `<div class="square buzz">buzz</div>`;
    }
    // terza condizione FizzBuzz
    else if(i % 3 == 0 && i % 5 == 0){
        squareElement.innerHTML += `<div class="square fizzbuzz">FizzBuzz</div>`;
    }
    // ultima condizione
    else{
    squareElement.innerHTML += `<div class="square">
    ${i} </div>`;
}

};














