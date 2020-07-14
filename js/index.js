
if (typeof document.onselectstart != "undefined") {
    document.onselectstart = new Function("return false");
} else {
    document.onmousedown = new Function("return false");
    document.onmouseup = new Function("return true");
}

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

let myVar;

function loading() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("unloader").style.display = "block";
}

$(document).ready(function() {
    $('[aria-label="Read More"]').click(function() {
      $(this).toggleClass( "active" );
      if ($(this).hasClass("active")) {
        $(this).text("Hide");
      } else {
        $(this).text("Read More");
      }
    }); 
    });

new WOW().init();