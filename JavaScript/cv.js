var showText = function(target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);

    setTimeout(function() {
      showText(target, message, index, interval);
    }, interval);
  }
};
$(function() {
  showText("#slideMessage", " CV SECURITY", 0, 150);
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText1.innerHTML = "Read more";
    moreText1.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText1.innerHTML = "Read less";
    moreText1.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
  }
}

function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText4 = document.getElementById("more4");
  var btnText4 = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText4.innerHTML = "Read more";
    moreText4.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText4.innerHTML = "Read less";
    moreText4.style.display = "inline";
  }
}

function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText5 = document.getElementById("more5");
  var btnText5 = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText5.innerHTML = "Read more";
    moreText5.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText5.innerHTML = "Read less";
    moreText5.style.display = "inline";
  }
}

var button1 = document.querySelector("#myBtn2");

if (button1) {
  button1.addEventListener("mouseover", function() {
    button1.style.borderBottom = "solid";
  });
  button1.addEventListener("mouseout", function() {
    button1.style.borderBottom = "none";
  });
}

var button2 = document.querySelector("#myBtn1");

if (button2) {
  button2.addEventListener("mouseover", function() {
    button2.style.borderBottom = "solid";
  });
  button2.addEventListener("mouseout", function() {
    button2.style.borderBottom = "none";
  });
}

var button3 = document.querySelector("#myBtn");

if (button3) {
  button3.addEventListener("mouseover", function() {
    button3.style.borderBottom = "solid";
  });
  button3.addEventListener("mouseout", function() {
    button3.style.borderBottom = "none";
  });
}

var button4 = document.querySelector("#myBtn3");

if (button4) {
  button4.addEventListener("mouseover", function() {
    button4.style.borderBottom = "solid";
  });
  button4.addEventListener("mouseout", function() {
    button4.style.borderBottom = "none";
  });
}

var button5 = document.querySelector("#myBtn4");

if (button5) {
  button5.addEventListener("mouseover", function() {
    button5.style.borderBottom = "solid";
  });
  button5.addEventListener("mouseout", function() {
    button5.style.borderBottom = "none";
  });
}

var button6 = document.querySelector("#myBtn5");

if (button6) {
  button6.addEventListener("mouseover", function() {
    button6.style.borderBottom = "solid";
  });
  button6.addEventListener("mouseout", function() {
    button6.style.borderBottom = "none";
  });
}

//   var button2 = document.getElementById("myBtn1");
//   button2.addEventListener("mouseenter",function(){
//     button2.style.borderBottom="solid";

//   });
//   button2.addEventListener("mouseout",function(){

//     button2.style.borderBottom="none";

//   })

// var button3 = document.getElementById("myBtn");
// button3.addEventListener("mouseenter",function(){
//   button3.style.borderBottom="solid";

// });
// button3.addEventListener("mouseout",function(){

//   button3.style.borderBottom="none";

// })
