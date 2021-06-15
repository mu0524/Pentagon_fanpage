function menubtn() {
    $("#lft_menu").animate({"left":"0"},800);
    $("#menubtn").fadeOut("slow");
}

function closebtn() {
    $("#lft_menu").animate({"left":"-21%"},500)
    $("#menubtn").fadeIn("slow");
}

function img_romantic_in() {
    $("#img_romantic_ro").css("opacity","1");
    $("#img_romantic").css("opacity","0");
}

function img_romantic_out() {
    $("#img_romantic_ro").css("opacity","0");
    $("#img_romantic").css("opacity","1");
}

// function img_romantic_in() {
//     $("#img_romantic").attr("src","./img/pentagon-ro.png");
// }

// function img_romantic_out() {
//     $("#img_romantic").attr("src","./img/pentagon.png")
// }