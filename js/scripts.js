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
              document.getElementById('hide55').style.display='none';

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
              document.getElementById('hide55').style.display='none';

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
       document.getElementById('hide55').style.display='none';
       document.getElementById('hide44').style.display='';
       document.getElementById('show44').innerText = "數據觀念建立";
   }
   else {
       isShow = false;
       document.getElementById('hide44').style.display='none';
       document.getElementById('show44').innerText = "數據觀念建立";
   }
}

var isShow = false;
function show55() {
    if(!isShow) {
        isShow = true;
        document.getElementById('hide33').style.display='none';
       document.getElementById('hide22').style.display='none';
       document.getElementById('hide44').style.display='none';
       document.getElementById('hide55').style.display='';
       document.getElementById('show55').innerText = "數據實戰演練";
   }
   else {
       isShow = false;
       document.getElementById('hide55').style.display='none';
       document.getElementById('show55').innerText = "數據實戰演練";
   }
}

let tabLink = document.getElementById("tabs").querySelectorAll("a");

let tabContents = document.getElementById("tab-inner").querySelectorAll('.form-content');

window.onload = function (){

    // 啟動第一個panel
     panelDisplay(tabLink[0]);
     //點擊  tab a連結
     for(let i = 0; i < tabLink.length; i++){
       tabLink[i].addEventListener('click',function(e){
        e.preventDefault();
         panelDisplay(this);
         // return false;
       });
       
       };
   
       function panelDisplay(activePanel){
          // Do something...
          for(let i =0;i<tabLink.length;i++){
                
            //設定條件tabLink ==activePanel 
            //將tablink代入for循環中並利用 if ...else 進行條件 classList.add增加class="active" ，就是每執行一次function的時候就進行全部tablinks增加class
           
              if(tabLink[i] == activePanel){
                tabLink[i].classList.add("active");
                tabContents[i].style.display="block";
                
              }else{
                tabLink[i].classList.remove("active");
                tabContents[i].style.display="none";
              }
          }
       }
  
     };
   