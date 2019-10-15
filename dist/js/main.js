$(document).ready(function(){
  $('a[data-rel^=lightcase]').lightcase();
  $('header  .btn').click(function(){
    $(this).toggleClass('active_btn');
    $('ul.menu').slideToggle();
  });
});
