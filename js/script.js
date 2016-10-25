document.onscroll=function(){fixHeader()};
var prevScroll = 0;
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
