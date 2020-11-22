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

// Profile dropdown

$('.search_container').click( function(event) {
    $('.search_container').addClass('active');
});

$(document).click( function(event){
    if ( !$(event.target).closest('.search_container').length ) {
	    $('.search_container').removeClass('active');
    }
});



// Profile dropdown

var openProfile = function(){
    $('.avatar').addClass('active');
    $('.profile_flyout').addClass('active');
}
var closeProfile = function(){
    $('.avatar').removeClass('active');
    $('.profile_flyout').removeClass('active');
}

$('.avatar').click( function(event) {
    event.stopPropagation();
    $(this).is('.active') ? closeProfile() : openProfile();
});

$(document).click( function(event){
    if ( !$(event.target).closest('.profile_flyout').length ) {
        closeProfile();   
    }
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

	$("[data-hover-animation-translate='on'] .navigationItem_top").hover(
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

	// Hover mouse direction

	$('li.hasChildren').each(function() {

	    $(this).on('mouseenter mouseleave', function(e) {
	        var $this = $(this),
	            width = $this.width(),
	            height = $this.height();

	        var x = (e.pageX - $this.offset().left - (width / 2)) * (width > height ? (height / width) : 1),
	            y = (e.pageY - $this.offset().top - (height / 2)) * (height > width ? (width / height) : 1);

	        // top = 0, right = 1, bottom = 2, left = 3
	        var dir_num = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4,
	            directions = ['top', 'right', 'bottom', 'left'];

	        // If mouse enter
	        if (e.type === 'mouseenter') {
	            // Remove all hover out classes

	            $("body").addClass("menuOpened");
	            $this.removeClass(function(index, css) {
	                return (css.match(/(^|\s)hover-out-\S+/g) || []).join(' ');
	            });

	            // Add in direction class
	            $this.addClass('hover-in-' + directions[dir_num]);
	        }


	        // If mouse leave
	        if (e.type === 'mouseleave') {
	            // Remove all hover in classes
	            $("body").removeClass("menuOpened");
	            $this.removeClass(function(index, css) {
	                return (css.match(/(^|\s)hover-in-\S+/g) || []).join(' ');
	            });

	            // Add out direction class
	            $this.addClass('hover-out-' + directions[dir_num]);
	        }
	    });
	  });

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

$("#hover-animation-translate").change(function(){
  var selectedHoverAnimation = $(this).children("option:selected").val();
  $('body').attr('data-hover-animation-translate', selectedHoverAnimation);
  $.animatedHover();
});

$("#hover-animation-opacity").change(function(){
  var selectedHoverAnimation = $(this).children("option:selected").val();
  $('body').attr('data-hover-animation-opacity', selectedHoverAnimation);
  $.animatedHover();
});

$("#dropdown-animation").change(function(){
  var selectedDropdownAnimation = $(this).children("option:selected").val();
  $('body').attr('data-dropdown-animation', selectedDropdownAnimation);
  $.animatedDropdown();
});

$("#user-status").change(function(){
  var selectedUserStatus = $(this).children("option:selected").val();
  $('body').attr('data-user-status', selectedUserStatus);
});

$("#search-width").change(function(){
  var selectedSearchWidth = $(this).children("option:selected").val();
  $('body').attr('data-search-width', selectedSearchWidth);
});






})(jQuery, this);






