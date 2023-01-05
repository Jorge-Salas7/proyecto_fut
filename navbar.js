$(function () {
  $(document).scroll(function () {
    var $nav = $(".contenedorA");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});