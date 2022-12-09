document.getElementById('myButton').onclick = function(){
    let prozents = document.getElementById("prozentsatz").value;
    let prozentw = document.getElementById("prozentwert").value;

    if (isNaN(prozents) || isNaN(prozentw)){
        document.querySelector("#grundwert").innerHTML = "Enter a number!";
        return;
    }

    document.querySelector("#grundwert").innerText = prozents * prozentw / 100 + "%";
}