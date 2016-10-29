document.onscroll=function(){fixHeader()};
window.addEventListener("pageshow",animateBg);
var prevScroll = 0;

function animateBg()
{
	$("#cut").addClass("fullSizeBg");
	$("#coverText").addClass("coverTextOpaque");
}

function fixHeader()
{
	
	if(document.body.scrollTop>100)
	{
		$("#header").addClass("fixed");
		console.log(prevScroll);
		prevScroll = document.body.scrollTop;
	}
	else if(document.body.scrollTop<=200)
	{
		$("#header").removeClass("fixed");
		prevScroll = document.body.scrollTop;
	}
}
