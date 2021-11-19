window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

// 點，特效
var isShow = false;
function show22() {
    if(!isShow) {
        isShow = true;
       document.getElementById('hide22').style.display='';
        document.getElementById('hide33').style.display='none';
       document.getElementById('hide44').style.display='none';
       document.getElementById('show22').innerText = "活動目的";
   }
   else {
       isShow = false;
       document.getElementById('hide22').style.display='none';
       document.getElementById('show22').innerText = "活動目的";
   }
}

var isShow = false;
function show33() {
    if(!isShow) {
        isShow = true;
       document.getElementById('hide33').style.display='';
       document.getElementById('hide22').style.display='none';
       document.getElementById('hide44').style.display='none';
       document.getElementById('show33').innerText = "活動規劃";
   }
   else {
       isShow = false;
       document.getElementById('hide33').style.display='none';
       document.getElementById('show33').innerText = "活動規劃";
   }
}


var isShow = false;
function show44() {
    if(!isShow) {
        isShow = true;
        document.getElementById('hide33').style.display='none';
       document.getElementById('hide22').style.display='none';
       document.getElementById('hide44').style.display='';
       document.getElementById('show44').innerText = "活動議程";
   }
   else {
       isShow = false;
       document.getElementById('hide44').style.display='none';
       document.getElementById('show44').innerText = "活動議程";
   }
}
