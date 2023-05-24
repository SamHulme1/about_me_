$(document).ready(function(){
  const welcomeButton = $("#welcome-button");
  const welcomeScreen = $("#loader");
  let projectAnimationCount = 0;
  let loadScreenAnimationCount = 0;

  welcomeButton.on("click", function(){
      welcomeScreen.attr('data-aos', 'slide-up');
      loadScreenAnimationCount ++;
      sessionStorage.setItem("loadScreenAnimationCount", loadScreenAnimationCount);
  });

  function projectAnimation(){
    $('#sld-right').stop(true, true).delay(1000).animate({
      right: '-50%',
      opacity: 0,
    }); 
  
    $('#sld-top').stop(true, true).delay(1000).animate({
      top: '-25em',
      opacity: 0,
    }), 2500; 
    
  
    $('#sld-left').stop(true, true).delay(1000).animate({
      left: '-50%',
      opacity: 0,
    }); 

    $('#project-animation-display-area').delay(2000).hide(0);

    projectAnimationCount ++;
    sessionStorage.setItem("projectAnimationCount", projectAnimationCount);
  }

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

  function checkAnimationWelcome(){
    currentAnimationCountWelcome = sessionStorage.getItem("loadScreenAnimationCount");
    if(currentAnimationCountWelcome === "1"){
      welcomeScreen.css('display','none');
  }
};

  AOS.init({
    once: true
  });
  checkAnimationProjects();
  checkAnimationWelcome();
 
});


