var isOperaExtreme = (navigator.userAgent.indexOf('Opera Mini/') > -1) && (navigator.userAgent.indexOf('Presto/') > -1);
if (isOperaExtreme === true) {
  window.location = "operamini/";
}

AOS.init({
  easing: 'ease-out-back',
  duration: 1000,
  disable: 'mobile'
});

$(document).ready(function () {

  var isMobilePhone = function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  };

  let swiper_1 = new Swiper('.swiper_1', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    grabCursor: true
  });

  /* toggle menu */
  $("body").on("click", "#menu-btn", function () {
    $("body").toggleClass("menu-open");
  });

  /*  smooth scroll */
  $("body").on("click", ".smooth-scroll", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });

  /* menu link */
  $("body").on("click", ".menu-link", function (e) {
    e.preventDefault();
    if (isMobilePhone()) {
      $("body").toggleClass("menu-open");
    }
    var target = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });

  /* form submitted */
  $("body").on("submit", "#age-checker-form", function (e) {
    e.preventDefault();
  });

  /* on Page Load */
  setTimeout(function () {
    $("body").addClass("loader-out");
  }, 800);

  /* get the leaderboard */
  $.ajax({
    url: "./api/data.php", success: function (result) {
      $("#table-body").html(result);
    }
  });

  var swiper = new Swiper('.gallery-swiper', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 600,
    loop: true,
    parallax: true,
    grabCursor: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


});