/*jshint esversion: 6 */

function onloadCallback()
{
    document.getElementById("send_button").disabled = true;
    captchaContainer = grecaptcha.render('captcha_container',
    {
        'sitekey': '6LccgwAVAAAAADI8X2EzDYeEm5s2MNx0U9K2h3fP',
        'callback': function(response)
        {
            document.getElementById("send_button").disabled = false;
        },

        'expired-callback': function(response)
        {
            document.getElementById("send_button").disabled = true;
        }
    });
};

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
            $("#content_container").addClass("history_projects_page");
            $("#wrapper_for_animation").addClass("animated fadeInDown");
            $("body").css({"overflow-x": "hidden", "overflow-y": "auto"});
            $(".active").removeClass("active");
            $("#nav_bar_history").addClass("active");
        }, 1000);
    }),

	    $(document).on("click", "#nav_bar_academics", function()
    {
        $("body").css("overflow", "hidden");
        $("#wrapper_for_animation").addClass("animated fadeOutUp");
        setTimeout(function()
        {
            $("#wrapper_for_animation").removeClass();
            $("#content_container").removeClass();
            $("#content_container").empty();
            $("#content_container").load("academics_page.html #academics_container");
            $("#content_container").addClass("history_projects_page");
            $("#wrapper_for_animation").addClass("animated fadeInDown");
            $("body").css({"overflow-x": "hidden", "overflow-y": "auto"});
            $(".active").removeClass("active");
            $("#nav_bar_academics").addClass("active");
        }, 1000);
    }),

    $(document).on("click", "#nav_bar_projects", function()
    {
        $("body").css("overflow", "hidden");
        $("#wrapper_for_animation").addClass("animated fadeOutUp");
        setTimeout(function()
        {
            $("#wrapper_for_animation").removeClass();
            $("#content_container").removeClass();
            $("#content_container").empty();
            $("#content_container").load("projects_page.html #projects_container");
            $("#content_container").addClass("history_projects_page");
            $("#wrapper_for_animation").addClass("animated fadeInDown");
            $("body").css({"overflow-x": "hidden", "overflow-y": "auto"});
            $(".active").removeClass("active");
            $("#nav_bar_projects").addClass("active");
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
            $("body").css({"overflow-x": "hidden", "overflow-y": "auto"});
            $(".active").removeClass("active");
            $("#nav_bar_contact").addClass("active");

            $.getScript("https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit");
        }, 1000);
    }),

    $(document).on("click", "#anonyblog_snapshots", function()
    {        
        $("body").css("overflow", "hidden");
        $("#wrapper_for_animation").addClass("animated fadeOutUp");
        setTimeout(function()
        {
            $("#wrapper_for_animation").removeClass();
            $("#content_container").removeClass();
            $("#content_container").empty();
            $("#content_container").load("anonyblog_snapshots.html #anonyblog_snapshots_container");
            $("#wrapper_for_animation").addClass("animated fadeInDown");
            $("body").css({"overflow-x": "hidden", "overflow-y": "auto"});
            $(".active").removeClass("active");

            $.getScript("https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit");
        }, 1000);
    }),

    $(document).on("click", "#seam_carve_snapshots", function()
    {        
        $("body").css("overflow", "hidden");
        $("#wrapper_for_animation").addClass("animated fadeOutUp");
        setTimeout(function()
        {
            $("#wrapper_for_animation").removeClass();
            $("#content_container").removeClass();
            $("#content_container").empty();
            $("#content_container").load("seam_carve_snapshots.html #seam_carve_snapshots_container");
            $("#wrapper_for_animation").addClass("animated fadeInDown");
            $("body").css({"overflow-x": "hidden", "overflow-y": "auto"});
            $(".active").removeClass("active");

            $.getScript("https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit");
        }, 1000);
    })
);

