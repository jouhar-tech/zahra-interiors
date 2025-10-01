/* Created by Jouhar */

$(document).ready(function () {
  // Toggle navigation on click
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $("nav").toggleClass("nav-toggle");
  });

  // Remove toggles on scroll/load
  $(window).on("scroll load", function () {
    $(".fa-bars").removeClass("fa-times");
    $("nav").removeClass("nav-toggle");
  });

  // Count animation
  $(".count").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 6000,
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum + "+");
        },
      }
    );
  });
});
