var getclass = document.getElementsByClassName("navlinks");
function changeActive (i){
    let curclass = document.getElementsByClassName("active")[0];
    curclass.classList.toggle("active");
    getclass[i].classList.toggle("active");
    
}

function changeWidth (i){
    let getclass0 = document.getElementsByClassName("danger-text");
    let getclass1 = document.getElementsByClassName("danger-image");
    getclass[i].style.width = "50%";
    getclass1[i].style.width = "50%";
}

function resetWidth (i){
    let getclass0 = document.getElementsByClassName("danger-text");
    let getclass1 = document.getElementsByClassName("danger-image");
    getclass[i].style.width = "35%";
    getclass1[i].style.width = "65%";
}