let titulo1 = document.getElementsByClassName("titulo1");
let titulo2 = document.getElementsByClassName("titulo2");

$().ready(function() {
   $('.titulo1').arctext({radius: 1000, rotate: false});
   $('.titulo2').arctext({radius: 1000, dir: -1, rotate: false});
});