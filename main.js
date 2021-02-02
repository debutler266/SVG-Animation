var svgCircle = document.getElementById('svgCircle');
var step1 = document.getElementById('step1');
var step2 = document.getElementById('step2');
var step3 = document.getElementById('step3');
var step4 = document.getElementById('step4');
var step5 = document.getElementById('step5');
var main = document.getElementById('main');
var userBox = document.getElementById('userBox'); //How we display different users as we click on the Circle//instead of them displayin vertically on the whole page

main.style.backgroundImage = "url(img/bg1.jpg)";


step1.addEventListener('click',()=>{
  svgCircle.style.strokeDashoffset = '1004';
  main.style.backgroundImage = "url(img/bg2.jpg)";
   userBox.style.top = "-350px"; //-350px bc we are moving position in CSS by 450px
});

step2.addEventListener('click',()=>{
  svgCircle.style.strokeDashoffset = '753';
  main.style.backgroundImage = "url(img/bg3.jpg)";
  userBox.style.top = "-800px"; //-800px bc 450px + 350px

step3.addEventListener('click',()=>{
  svgCircle.style.strokeDashoffset = '502';
  main.style.backgroundImage = "url(img/bg4.jpg)";
  userBox.style.top = "-1250px";
});

step4.addEventListener('click',()=>{
  svgCircle.style.strokeDashoffset = '251';
  main.style.backgroundImage = "url(img/bg5.jpg)";
  userBox.style.top = "-1700px";
});

step5.addEventListener('click',()=>{
  svgCircle.style.strokeDashoffset = '0';
  main.style.backgroundImage = "url(img/bg1.jpg)";
  userBox.style.top = "100px";
});
});
