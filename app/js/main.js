$(document).ready(function(){$(window).scroll(function(){100<=$(window).scrollTop()?($("header .btn").css({position:"fixed",top:"20px"}),$("header ul.menu").css({top:"20px"})):$("header .btn").css({top:"100px"})}),$("a[data-rel^=lightcase]").lightcase(),$("header  .btn").click(function(){$(this).toggleClass("active_btn"),$("ul.menu").slideToggle()})});