//document.onscroll=function(){fixHeader()};
//window.addEventListener("pageshow",animateBg);
document.getElementById("nav").addEventListener("mouseover",function(){$("#mainArea").addClass("blur");console.log("over")});
document.getElementById("nav").addEventListener("mouseout",function(){$("#mainArea").removeClass("blur");});

