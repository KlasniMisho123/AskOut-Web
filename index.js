var clickCount = 0;
$(".no-btn").on("click", function() {
    var randomWidth = genRandomWidth();
    var randomHeight = genRandomHeight();
    clickCount ++

    var noBtnElement = $(".no-btn");
    noBtnElement.css({
        "position": "fixed", 
        "top": randomHeight + "px",
        "right": randomWidth + "px"
    });

    console.log($(".backout-bunny").html)

    if (clickCount >= 3) {
    $(".backout-bunny").attr("src", "./assets/demandingbunny.gif");
}
});

$(".yes-btn").on("click", function() {
    window.location.href = "secondPage.html"
})


function genRandomWidth() {
    return Math.floor(Math.random()* 1350) + 1;   
}

function genRandomHeight() {
    return Math.floor(Math.random()* 650) + 1;   
}
