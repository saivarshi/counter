let count = 0;
document.getElementById("decrease").onclick = function(){
    count = count - 1;
    document.getElementById("numbering").innerHTML = count;
    document.getElementById("numbering").style.color = "red";
}
document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("numbering").innerHTML = count;
    document.getElementById("numbering").style.color = "black";
}
document.getElementById("increase").onclick = function(){
    count = count + 1;
    document.getElementById("numbering").innerHTML = count;
    document.getElementById("numbering").style.color = "green";
}