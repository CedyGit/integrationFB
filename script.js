// on a besoin de declarer que la classe setting-menu est querySelector 
var settingsmenu = document.querySelector(".settings-menu");

// pour le bouton de darkmode 
var darkBtn = document.getElementById("dark-btn");

// declarer que settingmenu prendra le css settings-menu-height apres selction
function settingsmenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

// fonciton pour le dark mode
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}