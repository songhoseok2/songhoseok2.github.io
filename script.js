/*jshint esversion: 6 */

$(document).ready(
    function()
    {
        $("#content_container").load("about_page.html #about_container");
        $("#content_container").addClass("about_page");
        console.log("running page");
    },

    $(document).on("click", "#nav_bar_portfolio", function()
    {
        $("body").css("overflow", "hidden");
        $("#wrapper_for_animation").addClass("animated rollOut");
        setTimeout(function()
        {
            $("#wrapper_for_animation").removeClass();
            $("#content_container").removeClass();
            $("#content_container").empty();
            $("#content_container").load("portfolio_page.html #portfolio_container");
            $("#content_container").addClass("portfolio_page");
            $("#wrapper_for_animation").addClass("animated rollIn");
            $("body").css({"overflow-x": "hidden", "overflow-y": "auto"});
            $(".active").removeClass("active");
            $("#nav_bar_portfolio").addClass("active");
        }, 1000);
    }),

    $(document).on("click", "#nav_bar_about", function()
    {        
        $("body").css("overflow", "hidden");
        $("#wrapper_for_animation").addClass("animated rollOut");
        setTimeout(function()
        {
            $("#wrapper_for_animation").removeClass();
            $("#content_container").removeClass();
            $("#content_container").empty();
            $("#content_container").load("about_page.html #about_container");
            $("#content_container").addClass("about_page");
            $("#wrapper_for_animation").addClass("animated rollIn");
            //overflow must remain hidden for about page
            $(".active").removeClass("active");
            $("#nav_bar_about").addClass("active");
        }, 1000);
    })
);

