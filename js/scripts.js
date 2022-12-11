
$("#lovetext").hide();
$("#wartext").hide();
$("#alientext").hide();
$("#helplove").hide();
$("#helpwar").hide();
$("#helpalien").hide();
$("#warsection").hide();
$("#aliensection").hide();


$("#submitlove").on("click", function () {


    $("#blank1").text($("#lovename").val());
    $("#blank2").text($("#loveadjective").val());
    $("#blank3").text($("#loveverb1").val());
    $("#blank4").text($("#loveface").val());
    $("#blank5").text($("#lovenumber").val());
    $("#blank6").text($("#lovepart").val());
    $("#blank7").text($("#loveadverb").val());
    $("#blank8").text($("#loveverb2").val());
    $("#blank9").text($("#lovenoun").val());
    $("#blank10").text($("#lovealias").val());

    window.scrollTo(0, 0);



    $("#inst").hide();




    $("#lovetext").toggle();
    console.log("submitted")

})


$("#submitwar").on("click", function () {


    $("#blankwar1").text($("#war1").val());
    $("#blankwar2").text($("#war2").val());
    $("#blankwar3").text($("#war3").val());
    $("#blankwar4").text($("#war4").val());
    $("#blankwar5").text($("#war5").val());
    $("#blankwar6").text($("#war6").val());
    $("#blankwar7").text($("#war7").val());
    $("#blankwar8").text($("#war8").val());
    $("#blankwar9").text($("#war9").val());
    $("#blankwar10").text($("#war10").val());
    $("#blankwar11").text($("#war11").val());
    $("#blankwar12").text($("#war12").val());
    $("#blankwar13").text($("#war13").val());
    $("#blankwar14").text($("#war14").val());



    window.scrollTo(0, 0);


    $("#inst").hide();

    $("#wartext").toggle();
    console.log("submitted")

})




$("#submitalien").on("click", function () {


    $("#alienblank1").text($("#alien1").val());
    $("#alienblank2").text($("#alien2").val());
    $("#alienblank3").text($("#alien3").val());
    $("#alienblank4").text($("#alien4").val());
    $("#alienblank5").text($("#alien5").val());
    $("#alienblank6").text($("#alien6").val());
    $("#alienblank7").text($("#alien7").val());
    $("#alienblank8").text($("#alien8").val());
    $("#alienblank9").text($("#alien9").val());
    $("#alienblank10").text($("#alien10").val());


    window.scrollTo(0, 0);


    $("#inst").hide();

    $("#alientext").toggle();
    console.log("submitted")

})


$("#helpbuttonlove").on("click", function () {

    $("#helplove").toggle();

})

$("#helpbuttonwar").on("click", function () {

    $("#helpwar").toggle();

})

$("#helpbuttonalien").on("click", function () {

    $("#helpalien").toggle();

})




$("#lovebutton").on("click", function () {

    $("#lovesection").show();
    $("#warsection").hide();
    $("#aliensection").hide();
    document.title = "LOVE LETTER";
    $("#warbutton").css("opacity", "30%");
    $("#alienbutton").css("opacity", "30%");
    $("#lovebutton").css("opacity", "100%");

    $("body").addClass("lovebody")
    $("body").removeClass("warbody")
    $("body").removeClass("alienbody")



})




$("#warbutton").on("click", function () {

    $("#warsection").show()
    $("#lovesection").hide();
    $("#aliensection").hide();
    document.title = "THE WAR";
    $("#lovebutton").css("opacity", "30%");
    $("#alienbutton").css("opacity", "30%");
    $("#warbutton").css("opacity", "100%");


    $("body").removeClass("lovebody")
    $("body").addClass("warbody")
    $("body").removeClass("alienbody")

})





$("#alienbutton").on("click", function () {


    $("#aliensection").show();
    $("#lovesection").hide();
    $("#warsection").hide();
    document.title = "ALIENS";
    $("#lovebutton").css("opacity", "30%");
    $("#warbutton").css("opacity", "30%");
    $("#alienbutton").css("opacity", "100%");

    $("body").removeClass("lovebody")
    $("body").removeClass("warbody")
    $("body").addClass("alienbody")

})


