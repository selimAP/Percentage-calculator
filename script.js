console.clear
document.getElementById('myButton').onclick = function(){

    var prozents = document.getElementById('prozentsatz').value;
    var prozentw = document.getElementById('prozentwert').value;

    document.querySelector('#grundwert').innerText = prozents * prozentw / 100;
}