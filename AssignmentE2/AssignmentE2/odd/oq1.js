// oq1.
// oq1.js
let res= document.getElementById("show");
let showNext = document.querySelector("div");

 showNext.onclick= function(e) {
      let num = document.getElementById("current");
      let currentnum= parseInt(num.value);
      let nextnum = (currentnum+ 1);
     res.textContent=`Next number is ${nextnum}`;
    }
