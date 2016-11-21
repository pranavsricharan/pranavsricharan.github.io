
//window.addEventListener("pageshow",animateBg);
document.getElementById("nav").addEventListener("mouseover",function(){$("#mainArea").addClass("blur");});
document.getElementById("nav").addEventListener("mouseout",function(){$("#mainArea").removeClass("blur");});
document.onscroll=function(){animateSkills()};
function animateSkills()
{
	if(document.getElementById("stat").getBoundingClientRect().top < 450)
		$(".statProgress").removeClass("noProgress");
	
	
}