document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    
    var rand1 =  Math.floor(Math.random() * 6) + 1;
    var rand2 = Math.floor(Math.random() * 6) + 1;
    var img1 = "./images/dice" + rand1 + ".png";
    var img2 = "./images/dice" + rand2 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", img1);
    document.querySelectorAll("img")[1].setAttribute("src", img2);

    if(rand1 > rand2){
        document.querySelector("h1").innerText = "🚩Player 1 Wins";
    } else if(rand2 > rand1){
        document.querySelector("h1").innerText = "Player 2 Wins🚩";
    } else {
        document.querySelector("h1").innerText = "Tie, draw again";
    }     

}
