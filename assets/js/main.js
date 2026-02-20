$(function ()  {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        if ($(this).scrollTop() > $nav.height()) {
           $nav.addclass("scrolled");
           $nav.removedclass("navbar-dark");
           $nav.addClass("navbar-light");
     } else {
           $nav.removedclass("scrolled");
           $nav.addclass("navbar-dark");
           $nav.removedclass("navbar-light");
        }  
    });
});