function open_close(){
  var bar = document.getElementById("ext");

  if (bar.style.display === "none") {
    bar.style.display = "block";
    
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("openNav").style.width = "200px";
  } else {
    bar.style.display = "none";

    document.getElementById("mySidebar").style.width = "50px";
    document.getElementById("main").style.marginLeft = "50px";
    document.getElementById("openNav").style.width = "50px";
    // document.getElementById("ext").style.display = "inline-block";
  }
}