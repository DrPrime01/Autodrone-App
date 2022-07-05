window.onload =hideFeat;


//function to hide every other features except the default feature
featContain = document.getElementById("featConatin");
featContain.innerHTML = "Hello"
featContain.style.color = "Red"
featContain.style.border = " 50px solid blue"
function hideFeat() {
  let allFeatIterables = document.querySelectorAll(".dronePF");
    for (let i=0; i<allFeatIterables.length; i++) {
        if(allFeatIterables[i].getAttribute("id")=="drone1PF") {
            allFeatIterables[i].style.display = "block";
        }
        else {
            allFeatIterables[i].style.display = "none"
        }
    }
}