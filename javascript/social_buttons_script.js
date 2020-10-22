/*jshint esversion: 6 */

$(document).ready(
    $(document).on("mouseenter", ".fa", function()
    {
        $(this).addClass("animated heartBeat");

        //tried adding the iteration count to heartBeat class but it doesn't work
        $(this).css("animation-iteration-count", "infinite");
    }),

    $(document).on("mouseleave", ".fa", function()
    {
        $(this).removeClass("animated heartBeat");
    })
);

