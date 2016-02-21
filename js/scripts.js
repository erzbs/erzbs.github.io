$(function(){
	var lastDiv = $("#selfIntro");
	$(".eachPage").each(function(){
		var _this = $(this);
		_this.click(function(){
			console.log("click:"+_this.attr("id"));
			if(lastDiv.attr("id") === _this.attr("id")) return;
			_this.addClass("top");
			lastDiv.removeClass("top");
			lastDiv = _this;
		});
	});
});