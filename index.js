var n1 = Math.floor(Math.random() * 6) + 1;
var n2 = Math.floor(Math.random() * 6) + 1;

var img1 = 'images/dice' + n1 +'.png';
var img2 = 'images/dice' + n2 +'.png';

document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

if(n1 > n2){
    document.querySelector("#winner-text").innerHTML = "🚩 Player 1 is the winner";
    document.querySelector("#winner-text").classList.add("small");
}
else if(n1 < n2){
    document.querySelector("#winner-text").innerHTML = "🚩 Player 2 is the winner";
    document.querySelector("#winner-text").classList.add("small");
} else {
    document.querySelector("#winner-text").innerHTML = "🚩 Its a draw";
    document.querySelector("#winner-text").classList.add("small");
}