var a = 5;
var x = "Janusz";

a = '5';

if(a == 5) {
    alert("to jest 5 !!");
}

for(var i = 0; i < 10; i++) {
    console.log("Jakas informacja");
    console.log(i);
    console.log(x);
}

//window.onload = funkcja;

function funkcja() {
    var div = document.getElementById("nasz-testowy-div");
    div.innerHTML = "cos nowego ze skryptu js !!!";
}