function open_close() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("openNav").style.width = "200px";
    // document.getElementById("mySidebar").style.display = "block";
    // document.getElementById("openNav").style.display = 'none';
  }
  function _close() {
    document.getElementById("main").style.marginLeft = "0";
//     document.getElementById("mySidebar").style.display = "none";
    // document.getElementById("openNav").style.display = "inline-block";
  }

//   var x = document.getElementById("mySidebar");
//   if (x.style.width === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }