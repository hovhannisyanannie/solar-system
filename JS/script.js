let menu1=document.getElementById('menu1');
let menu2=document.getElementById('menu2');
let menu3=document.getElementById('menu3');


let sunPlanets=document.getElementById('sunPlanets');
let starAnimation=document.getElementById('starAnimation');
let lunarEclipce=document.getElementById('lunarEclipce');


function clearBoxes(){
    sunPlanets.style.display="none";
    starAnimation.style.display="none";
    lunarEclipce.style.display="none";
    
}

function showBox(box){
    clearBoxes();
    box.style.display="block";
}

