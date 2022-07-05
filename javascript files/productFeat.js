
function changePlaceholder(change) {
   //picture replacement
   let changePic = change.getAttribute("value");
   let placeholder = document.getElementById("placeholderPic");
   placeholder.setAttribute("src", changePic); 
   //desc replacement
    let textChange = change.getAttribute("data-type");
    let desc = document.getElementById("description");
    desc.childNodes[0].nodeValue = textChange;
    //feature replacement
    let featContainer = document.getElementsByClassName("dronePF");
    let picAsBtn = document.getElementsByClassName("pic1");
    let drone2PF = document.getElementById("drone2PF");
    let drone3PF = document.getElementById("drone3PF");
    let drone4PF = document.getElementById("drone4PF");
    let picAsBtnLoop = function () {
        for (let i=0; i<picAsBtn.length; i++) {
            picAsBtn[i].getAttribute("id");
    }
}
    for (let i=0; i<featContainer.length; i++) {
        if (featContainer[i].getAttribute("id")=="drone2PF" && picAsBtnLoop=="pic2") {
            drone1PF.textContent = drone2PF;
        }
        if (featContainer[i].getAttribute("id")=="drone3PF" && picAsBtnLoop=="pic3") {
            drone1PF.textContent = drone3PF;
        }
        if (featContainer[i].getAttribute("id")=="drone4PF" && picAsBtnLoop=="pic4") {
            drone1PF.textContent = drone4PF;
        }
    }
}
