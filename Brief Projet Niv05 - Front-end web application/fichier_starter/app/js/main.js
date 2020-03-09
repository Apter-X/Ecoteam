function open_close(){
  var bar = document.getElementById("ext");

  if (bar.style.display === "none") {
    bar.style.display = "flex";
    
    document.getElementById("mySidebar").style.width = "100px";
    document.getElementById("main").style.marginLeft = "100px";
    document.getElementById("openNav").style.width = "100px";
  } else {
    bar.style.display = "none";

    document.getElementById("mySidebar").style.width = "50px";
    document.getElementById("main").style.marginLeft = "50px";
    document.getElementById("openNav").style.width = "50px";
  }
}