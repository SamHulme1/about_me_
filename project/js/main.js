$(document).ready(function(){
  /* onload find welcome screen and welcome button
  set inital animation counts
  init AOS
  call functions checkanimationproject/welcome */

 const welcomeButton = $("#welcome-button");
 const welcomeScreen = $("#loader");
 let projectAnimationCount = 0;
 let loadScreenAnimationCount = 0;

 /* disable welcome screen
 increment loadScreenAnimationCount
 set the value of this in session */
 welcomeButton.on("click", function(){
     welcomeScreen.attr('data-aos', 'slide-up');
     loadScreenAnimationCount ++;
     sessionStorage.setItem("loadScreenAnimationCount", loadScreenAnimationCount);
 });

 /* animation for projects
 check if the current window is less than 600px
 if so disable animation area and remove delays on AOS scroll content
 else play intial animation 
 increment project animation count
 set a variable in session to record that the 
 animation has been played */
 function projectAnimation(){
   $(window).resize(function() {
     if ($(this).width() <= 600) {
       $('#project-animation-display-area').css('display','none');
       $('.fade-inital').each(function() {
         $(this).removeAttr('data-aos-delay');
     });
   
     } else {
   
       $('#sld-right').stop(true, true).delay(1000).animate({
         right: '-50%',
         opacity: 0,
       }); 
     
       $('#sld-top').stop(true, true).delay(1000).animate({
         top: '-25em',
         opacity: 0,
       }); 
       
     
       $('#sld-left').stop(true, true).delay(1000).animate({
         left: '-50%',
         opacity: 0,
       }); 
   
       $('#project-animation-display-area').delay(2000).hide(0);
   
       projectAnimationCount ++;
       sessionStorage.setItem("projectAnimationCount", projectAnimationCount);
   
       }
   
   });
 }

 /* check if the value project animation count has been set in storage
 if so disable animation area and remove delays to AOS content 
 else play the animation */
 function checkAnimationProjects(){
   currentAnimationCount = sessionStorage.getItem("projectAnimationCount");
   if (currentAnimationCount === "1"){
     $('#project-animation-display-area').css('display','none');
     $('.fade-inital').each(function() {
       $(this).removeAttr('data-aos-delay');
     });
   } else {
     projectAnimation();
   }

 }

 /* check if the welcome screen has already be closed once by getting the loadscreenAnimationCount
 variable, if it has dont display the welcome screen */
 function checkAnimationWelcome(){
   currentAnimationCountWelcome = sessionStorage.getItem("loadScreenAnimationCount");
   if(currentAnimationCountWelcome === "1"){
     welcomeScreen.css('display','none');
 }
}

 AOS.init({
   once: true
 });
 checkAnimationProjects();
 checkAnimationWelcome();

});


