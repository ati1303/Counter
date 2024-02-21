const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");
const labelCount = document.getElementById("label");

let count = 0;

increase = document.getElementById("increase").onclick = function(){

    count++;

    labelCount.textContent = count;
}


decrease = document.getElementById("decrease").onclick = function(){

    count--;

    labelCount.textContent = count;
}


reset = document.getElementById("reset").onclick = function(){

    count = 0;


    labelCount.textContent = count;
}