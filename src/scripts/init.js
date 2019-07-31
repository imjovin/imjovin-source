$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.profile-header').backstretch([
      {width: 1080,url:"assets/imgs/header1.jpg",}
      ,{width: 1080,url:"assets/imgs/header2.jpg",}
    ], {duration: 1000, fade: 750});
  });