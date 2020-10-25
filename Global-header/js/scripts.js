(function($, root, undefined) {

/* Top nav active state */
$(".navigationItem_top").click(function () {
    var text = $(this).find(".navigationLink_top").text();
    $(".navigationItem_top").removeClass("active");
    $(this).addClass("active");
    $("h1").text(text);
    $.animatedHover();
});

/* Reset style */
function removeDataAttributes(target) {
    var $target = $(target);
    
    // Loop through data attributes.
    $.each($target.data(), function (key) {
        // Because each key is in camelCase,
        // we need to convert it to kabob-case and store it in attr.
        var attr = 'data-' + key.replace(/([A-Z])/g, '-$1').toLowerCase(); 
        // Remove the attribute.
        $target.removeAttr(attr);
    });
};

$(".reset a").click(function () {
    removeDataAttributes("body");
   $('select').prop('selectedIndex',0);
});


$.animatedHover = function() {
	var animatedHoverRunning = true;
	var $el, leftPos, newWidth;
	$navigation = $("#navigation > ul");

	$navigation.append("<li id='navigationLink_background_hover'></li>");

	var $magicHover = $("#navigationLink_background_hover");


	$magicHover
	  .width($(".active").width())
	  .css("left", $(".active a").position().left)
	  .data("origLeft", $(".active a").position().left)
	  .data("origWidth", $magicHover.width());

	$("[data-hover-animation='on'] .navigationItem_top").hover(
	  function() {
	    $el = $(this).find(".navigationLink_top");
	    $dropdownSize = $(this).find('.dropdown');

	    leftPos = $el.position().left;
	    newWidth = $el.parent().width();
	    $magicHover.stop().animate({
	      left: leftPos,
	      width: newWidth
	    });
	  },

	  function() {
	    $magicHover.stop().animate({
	      left: $magicHover.data("origLeft"),
	      width: $magicHover.data("origWidth")
	    });
	  }
	);

};




$.animatedDropdown = function() {

	var $el, leftPos, newWidth, dropdownWidth, dropdownHeight ;
	$navigation = $("#navigation > ul");

	$navigation.append("<li id='navigationLink_background_hover'></li>");
	var $dropdownBackground = $("#dropdownBackground");


	$(".navigationLink_top").hover(
	  function() {
	    $el = $(this);
	    $dropdownSize = $(this).next('.dropdown');

	    leftPos = $el.position().left;
	    newWidth = $el.parent().width();

	    dropdownWidth = $dropdownSize.width();
	    dropdownHeight = $dropdownSize.height();

	    $dropdownBackground.css({
	      height: dropdownHeight,
	      width: dropdownWidth
	    });
	  },

	);

};



/* Toggle styles */

$("#font-size").change(function(){
  var selectedSize = $(this).children("option:selected").val();
  $('body').attr('data-menu-font-size', selectedSize);
});

$("#spacing").change(function(){
  var selectedSpacing = $(this).children("option:selected").val();
  $('body').attr('data-menu-spacing', selectedSpacing);
});

$("#thumbnail-style").change(function(){
  var selectedThumbnailStyle = $(this).children("option:selected").val();
  $('body').attr('data-thumbnail-style', selectedThumbnailStyle);
});

$("#thumbnail-height").change(function(){
  var selectedThumbnailheight = $(this).children("option:selected").val();
  $('body').attr('data-thumbnail-height', selectedThumbnailheight);
});

$("#hover-animation").change(function(){
  var selectedHoverAnimation = $(this).children("option:selected").val();
  $('body').attr('data-hover-animation', selectedHoverAnimation);
  $.animatedHover();
});

$("#dropdown-animation").change(function(){
  var selectedDropdownAnimation = $(this).children("option:selected").val();
  $('body').attr('data-dropdown-animation', selectedDropdownAnimation);
  $.animatedDropdown();
});




})(jQuery, this);






