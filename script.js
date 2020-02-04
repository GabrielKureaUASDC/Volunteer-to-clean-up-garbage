$("#dates").hide();
$("#phones").hide();
$(".signin").hide();
$(".sign").click(function() {
    $("img").fadeIn();
    $(".next").fadeIn();
    $(".info").fadeIn();
    $(".recycle").fadeIn();
});

$(".signin").click(function(){
    
    if ($("#dates").val() !== "" && $("#phones").val() !== "") {
         $(" h3 ").text(" Thanks for taking your time here to sign in! We will notify you on when to clean up. ");
    } else {
       $(" h3 ").text(" Please put the date and phone number first! ");
        }
    
});


$("#there").click(function() {
    if ($("#names").val() !== "") {
        $("#dates").fadeIn();
        $("#phones").fadeIn();
        $(".signin").fadeIn();
         $(" h3 ").text("");
    } else {
       $(" h3 ").text(" Please put the name first! ");
        }

});
$(".next").click(function() {
    console.log($("#dates").val());
    console.log($("#phones").val());
    if ($("#dates").val() !== "" && $("#phones").val() !== "") {
        $("h4").fadeIn();
        $("h3").fadeOut();
    } else {
        $("h4").fadeOut();
        $("h3").fadeIn();
    }
    // $("h4").fadeIn();
    // $("h3").fadeIn();
});
$(".next").click(function() {
    console.log($("#there").val());
    console.log($("#names").val());
    if ($("#there").val() !== "" && $("#names").val() !== "") {
        $("#dates").fadeIn();
        $("#phones").fadeIn();
        $(".next").fadeIn();
        $("h3").fadeOut();
    } else {
        $("h4").fadeOut();
        $("h3").fadeIn();
    }
    // $("h4").fadeIn();
    // $("h3").fadeIn();
});