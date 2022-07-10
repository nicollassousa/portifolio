$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    })
});
var menuBar = document.querySelector('.menu-btn a .icon-menu');

menuBar.addEventListener('clik',(e)=>{ 
e.preventDefault();
let menuBtn = document.querySelector('.menu-btn ul');
menuBtn.classList.add('.show-menu');});
