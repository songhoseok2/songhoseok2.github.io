/*jshint esversion: 6 */
$(document).ready(
    function()
    {
        $("#content_container").load("about_page.html #about_container");
        $("#content_container").addClass("about_page");
    },

    $(document).on("click", "#nav_bar_about", function()
    {        
        $("body").css("overflow", "hidden");
        $("#wrapper_for_animation").addClass("animated fadeOutUp");
        setTimeout(function()
        {
            $("#wrapper_for_animation").removeClass();
            $("#content_container").removeClass();
            $("#content_container").empty();
            $("#content_container").load("about_page.html #about_container");
            $("#content_container").addClass("about_page");
            $("#wrapper_for_animation").addClass("animated fadeInDown");
            //overflow must remain hidden for about page
            $(".active").removeClass("active");
            $("#nav_bar_about").addClass("active");
        }, 1000);
    }),

    $(document).on("click", "#nav_bar_portfolio", function()
    {
        $("body").css("overflow", "hidden");
        $("#wrapper_for_animation").addClass("animated fadeOutUp");
        setTimeout(function()
        {
            $("#wrapper_for_animation").removeClass();
            $("#content_container").removeClass();
            $("#content_container").empty();
            $("#content_container").load("portfolio_page.html #portfolio_container");
            $("#content_container").addClass("history_portfolio_page");
            $("#wrapper_for_animation").addClass("animated fadeInDown");
            $("body").css({"overflow-x": "hidden", "overflow-y": "auto"});
            $(".active").removeClass("active");
            $("#nav_bar_portfolio").addClass("active");
        }, 1000);
    }),

    $(document).on("click", "#nav_bar_history", function()
    {        
        $("body").css("overflow", "hidden");
        $("#wrapper_for_animation").addClass("animated fadeOutUp");
        setTimeout(function()
        {
            $("#wrapper_for_animation").removeClass();
            $("#content_container").removeClass();
            $("#content_container").empty();
            $("#content_container").load("history_page.html #history_container");
            $("#content_container").addClass("history_portfolio_page");
            $("#wrapper_for_animation").addClass("animated fadeInDown");
            $("body").css({"overflow-x": "hidden", "overflow-y": "auto"});
            $(".active").removeClass("active");
            $("#nav_bar_history").addClass("active");
        }, 1000);
    }),

    $(document).on("click", "#nav_bar_contact", function()
    {        
        $("body").css("overflow", "hidden");
        $("#wrapper_for_animation").addClass("animated fadeOutUp");
        setTimeout(function()
        {
            $("#wrapper_for_animation").removeClass();
            $("#content_container").removeClass();
            $("#content_container").empty();
            $("#content_container").load("contact_page.html #contact_container");
            $("#content_container").addClass("contact_page");
            $("#wrapper_for_animation").addClass("animated fadeInDown");
            //overflow must remain hidden for contact page
            $(".active").removeClass("active");
            $("#nav_bar_contact").addClass("active");
        }, 1000);
    })
);

