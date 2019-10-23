/*jshint esversion: 6 */

$(document).ready(
    $(document).on("mouseenter", ".fa", function()
    {
        $(this).addClass("animated heartBeat");
        console.log("attempting to add animation iteration count");

        //tried adding the iteration count to heartBeat class but it doesn't work
        $(this).css("animation-iteration-count", "infinite");
    }),

    $(document).on("mouseleave", ".fa", function()
    {
        console.log("removing animation");
        $(this).removeClass("animated heartBeat");
    })
);

