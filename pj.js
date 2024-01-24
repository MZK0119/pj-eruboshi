let accordionDetails = '.js-details';
let accordionSummary = '.js-details-summary';
let accordionContent = '.js-details-content';
let speed = 300

$(accordionSummary).each(function() {
  $(this).on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("is-active");

    if ($(this).parent($(accordionDetails)).attr("open")) {
      $(this).nextAll($(accordionContent)).slideUp(speed, function() {
        $(this).parent($(accordionDetails)).removeAttr("open");
      });
    } else {
      $(this).parent($(accordionDetails)).attr("open", "true");
      $(this).nextAll($(accordionContent)).hide().slideDown(speed);
    }
  })
})