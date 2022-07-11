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


//script para Adicionar o SDK do Firebase\\
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDqGPbnAgurfvHWLa4rkpwRdOdUvbdtzbA",
    authDomain: "projeto01-234d2.firebaseapp.com",
    projectId: "projeto01-234d2",
    storageBucket: "projeto01-234d2.appspot.com",
    messagingSenderId: "993122503501",
    appId: "1:993122503501:web:000385b2d9adf406b60504",
    measurementId: "G-5MW96KPEPL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>