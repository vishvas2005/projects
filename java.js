
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });

  var creaze = document.querySelector(".fixed-image");
  var element = document.querySelector(".maincnta");


  element.addEventListener('mouseenter', function(){
      creaze.style.display = "block";
  });

  element.addEventListener('mouseleave' , function(){
       creaze.style.display = "none";
       creaze.style.backgroundColor = "red"
  });




var flt = document.querySelector(".float-image");
var swip = document.querySelector(".page5");

swip.addEventListener('mouseenter' , function(){
    flt.style.display = "block";
});

swip.addEventListener('mouseleave', function(){
    flt.style.display="none";
})

swip.addEventListener("mousemove" , function(dets){
      flt.style.left = dets.x+ "px";
      flt.style.top = dets.y + "px";
});



