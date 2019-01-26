function dropDownDigi(){
    document.getElementById("digiDropdown").classList.toggle("show");
}

function dropDownTech(){
    document.getElementById("techDropdown").classList.toggle("show");
}
function dropDownTechE(){
    document.getElementById("techDropdownE").classList.toggle("show");
}
/*
 function dropDownDigiW() {
 document.getElementById("wildDigiDropdown").classList.toggle("show");
 }
 */
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event){
    if (!event.target.matches('.dropbtn')) {
    
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
