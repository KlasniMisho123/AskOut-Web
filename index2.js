var dateChoise = ""
$(".diner").on("click",function(){
    dateChoise = "Diner"
    alert("Diner it is!")
})

$(".movies").on("click", function(){
    dateChoise = "Movies"
    alert(dateChoise + "? Sounds great")
})

$(".idea-btn").on("click", function(){
	ideaOutPut()
});

$(".idea-input").on("keypress", function(event){
	if(event.key === "Enter"){
		ideaOutPut();
	} else{

	}
});


$(".idea-content").on("click", ".idea-h2", function(){
	$(".idea-content").html(""); 
});



function ideaOutPut() {
	var dateChoice = saveInputValue();
	console.log(dateChoice);
	$(".idea-content").html("<h2 class='idea-h2'>" + dateChoice + "</h2>");
}

function saveInputValue (){
	return  $(".idea-input").val();
}



