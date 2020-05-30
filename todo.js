
var lis=document.querySelectorAll("li");
var spans=document.querySelectorAll("span");

$("ul").on("click","span",function(){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	})

})
$("ul").on("click","li",function(){
	$(this).toggleClass("linethroughclass");


});
$("input").keypress(function(event){
	if(event.charCode==13)
	{
			console.log("got it");
				var v="<li>"+this.value+"</li>";

			$("ul").append("<li>"+"<span><i class='fas fa-trash-alt'></i></span>"+this.value+"</li>");	
			$(this).val("");
	}

	
});
$("#add").click(function(){
	$("input").slideToggle("slow");
	$("input").val("");
});
