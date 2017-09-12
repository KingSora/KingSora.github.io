window._framework.defaultPagePath = 'basic';
var changeTimeoutId;
var basicDemoCodeMirror = CodeMirror(document.getElementById("basicdemo-options-codemirror"), {
	value: "{\n\tclassName       : \"os-theme-dark\",\n\tresize          : \"both\",\n\tsizeAutoCapable : true,\n\tpaddingAbsolute : true\n}",
	smartIndent : true,
	lineNumbers : true,
	lineWrapping: true,
	scrollbarStyle : null,
	cursorHeight: 0.85,
	indentWithTabs : true,
	indentUnit : 4,
	mode: { name: "javascript", json: true },
});
basicDemoCodeMirror.on("change", function(obj) { 
	if(changeTimeoutId !== undefined)
		clearTimeout(changeTimeoutId);
	
	changeTimeoutId = setTimeout(function() {
		$('#basicdemo-options-codemirror').removeClass('codemirror-error');
		try {
			$('#basicdemo-options-codemirror-result').stop().animate({ opacity : 0 }, 300, function() { 
				$('#basicdemo-options-codemirror-messages').stop().slideUp(300);
				$('#basicdemo-options-codemirror-result').find('pre').addClass('hidden');
				$('#basicdemo-options-codemirror-result-target').show();
				var oldWarn = console.warn;
				console.warn = function(msg) { 
					$('#basicdemo-options-codemirror-messages').find('pre').first().text(msg);
					$('#basicdemo-options-codemirror-messages').stop().slideDown(300);
				};
				try {
				window.eval("try { " +
							"var options = $.extend(true, { }, window.overlayScrollbarsDefaultOptions(), " + basicDemoCodeMirror.getValue() + "); " + 
								"$('#basicdemo-options-codemirror-result-target').overlayScrollbars(options); " + 
							"} catch(e) { " +
								"$('#basicdemo-options-codemirror').addClass('codemirror-error'); " +
								"$('#basicdemo-options-codemirror-result-target').hide(); " + 
								"$('#basicdemo-options-codemirror-result').stop().animate({ opacity : 1 }, 300).find('pre').removeClass('hidden').text(e); " + 
							"}");
				} catch(e) { 
					$('#basicdemo-options-codemirror').addClass('codemirror-error');
					$('#basicdemo-options-codemirror-result-target').hide(); 
					$('#basicdemo-options-codemirror-result').stop().animate({ opacity : 1 }, 300).find('pre').removeClass('hidden').text(e);
				}
				$('#basicdemo-options-codemirror-result').stop().animate({ opacity : 1 }, 300);
				console.warn = oldWarn;
			});
		}
		catch (e) {
			$('#basicdemo-options-codemirror').addClass('codemirror-error');
			$('#basicdemo-options-codemirror-result-target').hide(); 
			$('#basicdemo-options-codemirror-result').stop().animate({ opacity : 1 }, 300).find('pre').removeClass('hidden').text(e);
		}
	}, 500);
});
$('#basicdemo-options-codemirror-messages').overlayScrollbars({ paddingAbsolute : true, overflowBehavior : { y : "hidden" } });
$('#basicdemo-options-codemirror-messages').hide();
eval("$('#basicdemo-options-codemirror-result-target').overlayScrollbars(" + basicDemoCodeMirror.getValue() + ");");

var resizeDragStartSize = { };
var resizeDragStartPosition = { };
var resizer;
var target;
var strMouseTouchDownEvent = 'mousedown touchstart';
var strMouseTouchUpEvent = 'mouseup touchend';
var strMouseTouchMoveEvent = 'mousemove touchmove';
var strSelectStartEvent = 'selectstart';


function resizerMouseDown(event) {
	var originalEvent = event.originalEvent || event;
	var isTouchEvent = originalEvent.touches !== undefined;
	var mouseOffsetHolder = isTouchEvent ? originalEvent.touches[0] : event;

	if(event.buttons === 1 || event.which === 1 || isTouchEvent) {
		resizeDragStartPosition.x = mouseOffsetHolder.pageX;
		resizeDragStartPosition.y = mouseOffsetHolder.pageY;
		
		target = $(event.target).closest('.resizer-handle');
		resizer = target.closest('.resizer');

		resizeDragStartSize.w = resizer[0].clientWidth;
		resizeDragStartSize.h = resizer[0].clientHeight;

		$('body').addClass('resizing');
		$(document).on(strSelectStartEvent, onSelectStart);
		$(document).on(strMouseTouchMoveEvent, resizerResize);
		$(document).on(strMouseTouchUpEvent, resizerResized);

		event.preventDefault();
		event.stopPropagation();
	}
}

function resizerResize(event) {
	var originalEvent = event.originalEvent || event;
	var isTouchEvent = originalEvent.touches !== undefined;
	var mouseOffsetHolder = isTouchEvent ? originalEvent.touches[0] : event;
	var hostElementCSS = { };
	var CSS = { 
		width : (resizeDragStartSize.w + mouseOffsetHolder.pageX - resizeDragStartPosition.x),
		height : (resizeDragStartSize.h + mouseOffsetHolder.pageY - resizeDragStartPosition.y)
	};
	
	if(target.hasClass('resizer-handle-x'))
		delete CSS.height;
	else if(target.hasClass('resizer-handle-y'))
		delete CSS.width;
	resizer.css(CSS);
	event.stopPropagation();
	resizer.trigger('resizer', [ CSS ]);
}

function resizerResized(event) {
	var eventIsTrusted = event !== undefined;

	$('body').removeClass('resizing');
	$(document).off(strSelectStartEvent, onSelectStart);
	$(document).off(strMouseTouchMoveEvent, resizerResize);
	$(document).off(strMouseTouchUpEvent, resizerResized);
	
	resizeDragStartSize = { };
	resizeDragStartPosition = { };
	resizer = undefined;
	target = undefined;
}

function onSelectStart(event) {
	event.preventDefault();
	return false;
}
$('.capabilitiesdemo-absolute').on('resizer', function(event, CSS) { 
	$('.capabilitiesdemo-absolute').css(CSS);
	event.preventDefault();
	return false;
});
$('.capabilitiesdemo-resize').on('resizer', function(event, CSS) { 
	$('.capabilitiesdemo-resize').css(CSS);
	event.preventDefault();
	return false;
});
$('.capabilitiesdemo-slot-1 .capabilitiesdemo-slot-resizer').on('resizer', function(event, CSS) { 
	$('.capabilitiesdemo-slot-2 .capabilitiesdemo-slot-resizer').css(CSS);
});
$('.capabilitiesdemo-slot-2 .capabilitiesdemo-slot-resizer').on('resizer', function(event, CSS) { 
	$('.capabilitiesdemo-slot-1 .capabilitiesdemo-slot-resizer').css(CSS);
});

$('.capabilitiesdemo-slot-3 .capabilitiesdemo-slot-resizer').on('resizer', function(event, CSS) { 
	$('.capabilitiesdemo-slot-4 .capabilitiesdemo-slot-resizer').css(CSS);
});
$('.capabilitiesdemo-slot-4 .capabilitiesdemo-slot-resizer').on('resizer', function(event, CSS) { 
	$('.capabilitiesdemo-slot-3 .capabilitiesdemo-slot-resizer').css(CSS);
});

$('.resizer-handle').on(strMouseTouchDownEvent, resizerMouseDown);

$('#capabilites-reset').on('click', function() { 
	$('#capabilites-host-direction > .dropdown-value').text($('#capabilites-host-direction > .dropdown-list > div').first().text());
	$('#capabilites-host-direction').trigger('dropdownvaluechanged');
	$('#capabilites-host-boxsizing > .dropdown-value').text($('#capabilites-host-boxsizing > .dropdown-list > div').first().text());
	$('#capabilites-host-boxsizing').trigger('dropdownvaluechanged');
	$('#capabilites-host-width > .dropdown-value').text($('#capabilites-host-width > .dropdown-list > div').first().text());
	$('#capabilites-host-width').trigger('dropdownvaluechanged');
	$('#capabilites-host-height > .dropdown-value').text($('#capabilites-host-height > .dropdown-list > div').first().text());
	$('#capabilites-host-height').trigger('dropdownvaluechanged');
	$('#capabilites-host-float > .dropdown-value').text($('#capabilites-host-float > .dropdown-list > div').first().text());
	$('#capabilites-host-float').trigger('dropdownvaluechanged');
	$('#capabilites-host-border > .dropdown-value').text($('#capabilites-host-border > .dropdown-list > div').first().text());
	$('#capabilites-host-border').trigger('dropdownvaluechanged');
	$('#capabilites-host-margin > .dropdown-value').text($('#capabilites-host-margin > .dropdown-list > div').first().text());
	$('#capabilites-host-margin').trigger('dropdownvaluechanged');
	$('#capabilites-host-padding > .dropdown-value').text($('#capabilites-host-padding > .dropdown-list > div').first().text());
	$('#capabilites-host-padding').trigger('dropdownvaluechanged');
	$('#capabilites-env-width > .dropdown-value').text($('#capabilites-env-width > .dropdown-list > div').first().text());
	$('#capabilites-env-width').trigger('dropdownvaluechanged');
	$('#capabilites-env-height > .dropdown-value').text($('#capabilites-env-height > .dropdown-list > div').first().text());
	$('#capabilites-env-height').trigger('dropdownvaluechanged');
	$('.capabilitiesdemo-absolute').removeClass('hidden');
	$('.capabilitiesdemo-resize').removeClass('hidden');
	$('.capabilitiesdemo-hundred').removeClass('hidden');
	$('.capabilitiesdemo-end').removeClass('hidden');	
	$('#capabilites-min-max').prop('checked', true).trigger('change');
	$('#capabilites-padding-absolute').prop('checked', false).trigger('change');
	$('.capabilitiesdemo-slot-content').removeAttr('style');
	$('.capabilitiesdemo-slot-resizer').removeAttr('style');
});

$('#capabilites-content-absolute').on('click', function() { 
	$('.capabilitiesdemo-absolute').toggleClass('hidden');
});
$('#capabilites-content-resize').on('click', function() { 
	$('.capabilitiesdemo-resize').toggleClass('hidden');
});
$('#capabilites-content-hundred').on('click', function() { 
	$('.capabilitiesdemo-hundred').toggleClass('hidden');
});
$('#capabilites-content-end').on('click', function() { 
	$('.capabilitiesdemo-end').toggleClass('hidden');
});

$('#capabilites-host-direction').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'direction-rtl',
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.capabilitiesdemo-slot-resizer').removeClass(classes[i]);
	if(value === "RTL") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[0]);
	}
});
$('#capabilites-host-boxsizing').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'boxsizing-contentbox',
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.capabilitiesdemo-slot-resizer').removeClass(classes[i]);
	if(value === "content-box") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[0]);
	}
});
$('#capabilites-host-width').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'width-auto',
		'width-hundred'
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.capabilitiesdemo-slot-resizer').removeClass(classes[i]);
	if(value === "Auto") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[0]);
	}
	else if(value === "100%") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[1]);
	}
});
$('#capabilites-host-height').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'height-auto',
		'height-hundred'
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.capabilitiesdemo-slot-resizer').removeClass(classes[i]);
	if(value === "Auto") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[0]);
	}
	else if(value === "100%") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[1]);
	}
});
$('#capabilites-host-float').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'float-left',
		'float-right'
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.capabilitiesdemo-slot-resizer').removeClass(classes[i]);
	if(value === "Left") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[0]);
	}
	else if(value === "Right") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[1]);
	}
	$('.capabilitiesdemo-slot-content').removeAttr('style');
});
$('#capabilites-host-border').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'border-eight',
		'border-none'
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.capabilitiesdemo-slot-resizer').removeClass(classes[i]);
	if(value === "8px") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[0]);
	}
	else if(value === "None") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[1]);
	}
});
$('#capabilites-host-margin').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'margin-ten',
		'margin-twenty'
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.capabilitiesdemo-slot-resizer').removeClass(classes[i]);
	if(value === "10px") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[0]);
	}
	else if(value === "20px") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[1]);
	}
});
$('#capabilites-host-padding').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'padding-twenty',
		'padding-thirty',
		'padding-none'
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.capabilitiesdemo-slot-resizer').removeClass(classes[i]);
	if(value === "20px") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[0]);
	}
	else if(value === "30px") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[1]);
	}
	else if(value === "0px") {
		$('.capabilitiesdemo-slot-resizer').addClass(classes[2]);
	}
});
$('#capabilites-env-width').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'width-auto',
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.capabilitiesdemo-env').removeClass(classes[i]);
	if(value === "Auto") {
		$('.capabilitiesdemo-env').addClass(classes[0]);
	}
});
$('#capabilites-env-height').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'height-auto',
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.capabilitiesdemo-env').removeClass(classes[i]);
	if(value === "Auto") {
		$('.capabilitiesdemo-env').addClass(classes[0]);
	}
});


var txt = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
$('#capabilitiesdemo-target-textarea').val(txt);
$('#capabilitiesdemo-native-textarea').val(txt);

var plugin = window.i = $('#capabilitiesdemo-target').overlayScrollbars({ 
	normalizeRTL : false,
	clipAlways : false,
	callbacks : {
		onScroll : function() { 
			$('#capabilitiesdemo-native').scrollTop($('#capabilitiesdemo-target').overlayScrollbars().scroll().y.position);
			$('#capabilitiesdemo-native').scrollLeft($('#capabilitiesdemo-target').overlayScrollbars().scroll().x.position);
		},
	}
}).overlayScrollbars();
var pluginTextarea = window.t = $('#capabilitiesdemo-target-textarea').overlayScrollbars({ 
	normalizeRTL : false,
	clipAlways : false,
	callbacks : {
		onScroll : function() { 
			$('#capabilitiesdemo-native-textarea').scrollTop($('#capabilitiesdemo-target-textarea').overlayScrollbars().scroll().y.position);
			$('#capabilitiesdemo-native-textarea').scrollLeft($('#capabilitiesdemo-target-textarea').overlayScrollbars().scroll().x.position);
		},
	}
}).overlayScrollbars();

$('#capabilitiesdemo-target-textarea').on('keyup', function() { 
	$('#capabilitiesdemo-native-textarea').val($('#capabilitiesdemo-target-textarea').val());
});
$('#capabilitiesdemo-native-textarea').on('keyup', function() { 
	$('#capabilitiesdemo-target-textarea').val($('#capabilitiesdemo-native-textarea').val());
	pluginTextarea.update();
});

$('#capabilites-min-max').on('change', function() { 
	if($(this).is(":checked"))
		$('.capabilitiesdemo-slot-resizer').removeClass('infinite');
	else
		$('.capabilitiesdemo-slot-resizer').addClass('infinite');
	$('.capabilitiesdemo-slot-content').removeAttr('style');
}).prop('checked', true);

$('#capabilites-padding-absolute').on('change', function() { 
	if($(this).is(":checked")) {
		plugin.options('paddingAbsolute', true);
		pluginTextarea.options('paddingAbsolute', true);
	}
	else {
		plugin.options('paddingAbsolute', false);
		pluginTextarea.options('paddingAbsolute', false);
	}
}).prop('checked', false);

$('#capabilites-clip-always').on('change', function() { 
	if($(this).is(":checked")) {
		plugin.options('clipAlways', true);
		pluginTextarea.options('clipAlways', true);
	}
	else {
		plugin.options('clipAlways', false);
		pluginTextarea.options('clipAlways', false);
	}
}).prop('checked', false);

$('#capabilites-update').on('click', function() { 
	plugin.update();
	pluginTextarea.update();
});



var strActive = 'active';
var timeout = 250;
var scrollStartTimeout;
var scrollTimeout;
var scrollStopTimeout;
var overflowChangedTimeout;
var overflowAmountChangedTimeout;
var directionChangedTimeout;
var contentSizeChangedTimeout;
var hostSizeChangedTimeout;
var updatedTimeout;
var scrollStartNum = 0;
var scrollNum = 0;
var scrollStopNum = 0;
var overflowChangedNum = 0;
var overflowAmountChangedNum = 0;
var directionChangedNum = 0;
var contentSizeChangedNum = 0;
var hostSizeChangedNum = 0;
var updatedNum = 0;

$('#callbacks-container-right-plugin').overlayScrollbars({ 
	resize : 'both',
	callbacks : {
		onScrollStart : function(e) {
			var elem = $('#callbacks-light-onScrollStart').addClass(strActive);
			scrollStartNum++;
			$('#callbacks-num-onScrollStart').text(scrollStartNum);
			clearTimeout(scrollStartTimeout);
			scrollStartTimeout = setTimeout(function() { 
				elem.removeClass(strActive);
			}, timeout);
		},
		onScroll : function(e) {
			var elem = $('#callbacks-light-onScroll').addClass(strActive);
			scrollNum++;
			$('#callbacks-num-onScroll').text(scrollNum);
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(function() { 
				elem.removeClass(strActive);
			}, timeout);
		},
		onScrollStop : function(e) {
			var elem = $('#callbacks-light-onScrollStop').addClass(strActive);
			scrollStopNum++;
			$('#callbacks-num-onScrollStop').text(scrollStopNum);
			clearTimeout(scrollStopTimeout);
			scrollStopTimeout = setTimeout(function() { 
				elem.removeClass(strActive);
			}, timeout);
		},
		onOverflowChanged : function(e) {
			var elem = $('#callbacks-light-onOverflowChanged').addClass(strActive);
			overflowChangedNum++;
			$('#callbacks-num-onOverflowChanged').text(overflowChangedNum);
			//console.log("onOverflowChanged : " + JSON.stringify(e, null, 2));
			clearTimeout(overflowChangedTimeout);
			overflowChangedTimeout = setTimeout(function() { 
				elem.removeClass(strActive);
			}, timeout);
		},
		onOverflowAmountChanged : function(e) {
			var elem = $('#callbacks-light-onOverflowAmountChanged').addClass(strActive);
			overflowAmountChangedNum++;
			$('#callbacks-num-onOverflowAmountChanged').text(overflowAmountChangedNum);
			//console.log("onOverflowAmountChanged : " + JSON.stringify(e, null, 2));
			clearTimeout(overflowAmountChangedTimeout);
			overflowAmountChangedTimeout = setTimeout(function() { 
				elem.removeClass(strActive);
			}, timeout);
		},
		onDirectionChanged : function(e) {
			var elem = $('#callbacks-light-onDirectionChanged').addClass(strActive);
			directionChangedNum++;
			$('#callbacks-num-onDirectionChanged').text(directionChangedNum);
			//console.log("onDirectionChanged : " + JSON.stringify(e, null, 2));
			clearTimeout(directionChangedTimeout);
			directionChangedTimeout = setTimeout(function() { 
				elem.removeClass(strActive);
			}, timeout);
		},
		onContentSizeChanged : function(e) {
			var elem = $('#callbacks-light-onContentSizeChanged').addClass(strActive);
			contentSizeChangedNum++;
			$('#callbacks-num-onContentSizeChanged').text(contentSizeChangedNum);
			//console.log("onContentSizeChanged : " + JSON.stringify(e, null, 2));
			clearTimeout(contentSizeChangedTimeout);
			contentSizeChangedTimeout = setTimeout(function() { 
				elem.removeClass(strActive);
			}, timeout);
		},
		onHostSizeChanged : function(e) {
			var elem = $('#callbacks-light-onHostSizeChanged').addClass(strActive);
			hostSizeChangedNum++;
			$('#callbacks-num-onHostSizeChanged').text(hostSizeChangedNum);
			//console.log("onHostSizeChanged : " + JSON.stringify(e, null, 2));
			clearTimeout(hostSizeChangedTimeout);
			hostSizeChangedTimeout = setTimeout(function() { 
				elem.removeClass(strActive);
			}, timeout);
		},
		onUpdated : function(e) {
			var elem = $('#callbacks-light-onUpdated').addClass(strActive);
			updatedNum++;
			$('#callbacks-num-onUpdated').text(updatedNum);
			//console.log("onUpdated : " + JSON.stringify(e, null, 2));
			clearTimeout(updatedTimeout);
			updatedTimeout = setTimeout(function() { 
				elem.removeClass(strActive);
			}, timeout);
		},
	}
});

$('#callbacks-reset').on('click', function() { 
	$('#callbacks-container-right-plugin').removeAttr('style');
	$('.callbacks-resizer').removeAttr('style');
	setTimeout(function() { 
		scrollStartNum = 0;
		scrollNum = 0;
		scrollStopNum = 0;
		overflowChangedNum = 0;
		overflowAmountChangedNum = 0;
		directionChangedNum = 0;
		contentSizeChangedNum = 0;
		hostSizeChangedNum = 0;
		updatedNum = 0;
		$('#callbacks-num-onScrollStart').text(scrollStartNum);
		$('#callbacks-num-onScroll').text(scrollNum);
		$('#callbacks-num-onScrollStop').text(scrollStopNum);
		$('#callbacks-num-onOverflowChanged').text(overflowChangedNum);
		$('#callbacks-num-onOverflowAmountChanged').text(overflowAmountChangedNum);
		$('#callbacks-num-onDirectionChanged').text(directionChangedNum);
		$('#callbacks-num-onContentSizeChanged').text(contentSizeChangedNum);
		$('#callbacks-num-onHostSizeChanged').text(hostSizeChangedNum);
		$('#callbacks-num-onUpdated').text(updatedNum);
	}, 50);
});

$('#callbacks-change-dir').on('click', function() { 
	var dir = $('#callbacks-container-right-plugin').css('direction');
	if(dir === 'ltr')
		$('#callbacks-container-right-plugin').css('direction', 'rtl');
	else
		$('#callbacks-container-right-plugin').css('direction', 'ltr');
});

$('#callbacks-rnd-size').on('click', function() { 
	var w = Math.floor(Math.random() * 600) + 50;  
	var h = Math.floor(Math.random() * 400) + 50;
	$('#callbacks-container-right-plugin').css({ 'width' : w, 'height' : h });
});







$('#textarea-demo-width').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'auto-width'
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.textarea-demo-plugin').removeClass(classes[i]);
	if(value === "Auto") {
		$('.textarea-demo-plugin').addClass(classes[0]);
	}
});
$('#textarea-demo-height').on('dropdownvaluechanged', function(event, value) { 
	var classes = [ 
		'auto-height'
	];
	var i;
	for(i = 0; i < classes.length; i++)
		$('.textarea-demo-plugin').removeClass(classes[i]);
	if(value === "Auto") {
		$('.textarea-demo-plugin').addClass(classes[0]);
	}
});
$('#textarea-demo-wrap').on('dropdownvaluechanged', function(event, value) { 
	if(value === "Off") {
		$('#textarea-demo-plugin').attr('wrap', 'off');
	}
	else {
		$('#textarea-demo-plugin').removeAttr('wrap');
	}
});
$('#textarea-demo-rows').on('dropdownvaluechanged', function(event, value) { 
	if(value === "15") {
		$('#textarea-demo-plugin').attr('rows', 15);
	}
	else if(value === "30") {
		$('#textarea-demo-plugin').attr('rows', 30);
	}
	else {
		$('#textarea-demo-plugin').removeAttr('rows');
	}
});
$('#textarea-demo-cols').on('dropdownvaluechanged', function(event, value) { 
	if(value === "30") {
		$('#textarea-demo-plugin').attr('cols', 30);
	}
	else if(value === "60") {
		$('#textarea-demo-plugin').attr('cols', 60);
	}
	else {
		$('#textarea-demo-plugin').removeAttr('cols');
	}
});

var textareaDemoTxt = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr," + "\r\n" +
"sed diam nonumy eirmod tempor invidunt ut labore et dolore magna" + "\r\n" +
"aliquyam erat, sed diam voluptua." + "\r\n" +
"At vero eos et accusam et justo duo dolores et ea rebum." + "\r\n" +
"Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor" + "\r\n" +
"sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" + "\r\n" +
"nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat," + "\r\n" +
"sed diam voluptua.\r\n\r\n" +
"-----------------------This line is extra long to demonstrate text wrap=\"off\"-----------------------" + "\r\n" +
"" + "\r\n" +
"At vero eos et accusam et justo duo dolores et ea rebum." + "\r\n" +
"Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." + "\r\n" +
"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" + "\r\n" +
"nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat," + "\r\n" +
" sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." + "\r\n" +
"Stet clita kasd gubergren, no sea takimata sanctus est" + "\r\n" +
"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur" + "\r\n" +
"sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore" + "\r\n" +
"magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo" + "\r\n" +
"duo dolores et ea rebum." + "\r\n" +
"Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
$('#textarea-demo-plugin').val(textareaDemoTxt);
var textareaDemoPlugin = $('#textarea-demo-plugin').overlayScrollbars({ 
	className : 'os-theme-dark textarea-demo-plugin',
	resize : 'both',
}).overlayScrollbars();

$('#textarea-demo-dynwidth').on('change', function() { 
	if($(this).is(":checked"))
		textareaDemoPlugin.options('textarea.dynWidth', true);
	else
		textareaDemoPlugin.options('textarea.dynWidth', false);
}).prop('checked', false);

$('#textarea-demo-dynheight').on('change', function() { 
	if($(this).is(":checked"))
		textareaDemoPlugin.options('textarea.dynHeight', true);
	else
		textareaDemoPlugin.options('textarea.dynHeight', false);
}).prop('checked', false);

$('#textarea-demo-reset').on('click', function() { 
	$('#textarea-demo-width > .dropdown-value').text($('#textarea-demo-width > .dropdown-list > div').first().text());
	$('#textarea-demo-width').trigger('dropdownvaluechanged');
	$('#textarea-demo-height > .dropdown-value').text($('#textarea-demo-height > .dropdown-list > div').first().text());
	$('#textarea-demo-height').trigger('dropdownvaluechanged');
	$('#textarea-demo-wrap > .dropdown-value').text($('#textarea-demo-wrap > .dropdown-list > div').first().text());
	$('#textarea-demo-wrap').trigger('dropdownvaluechanged');
	$('#textarea-demo-cols > .dropdown-value').text($('#textarea-demo-cols > .dropdown-list > div').first().text());
	$('#textarea-demo-cols').trigger('dropdownvaluechanged');
	$('#textarea-demo-rows > .dropdown-value').text($('#textarea-demo-rows > .dropdown-list > div').first().text());
	$('#textarea-demo-rows').trigger('dropdownvaluechanged');
	$('#textarea-demo-dynwidth').prop('checked', false).trigger('change');
	$('#textarea-demo-dynheight').prop('checked', false).trigger('change');
	$('.textarea-demo-plugin').removeAttr('style');
});
$('#textarea-demo-full-dynwidth').on('click', function() { 
	$('#textarea-demo-width > .dropdown-value').text($('#textarea-demo-width > .dropdown-list > div').last().text());
	$('#textarea-demo-plugin').attr('wrap', 'off');
	$('#textarea-demo-wrap > .dropdown-value').text($('#textarea-demo-wrap > .dropdown-list > div').last().text());
	$('.textarea-demo-plugin').addClass('auto-width');
	$('#textarea-demo-dynwidth').prop('checked', true).trigger('change');
});
$('#textarea-demo-full-dynheight').on('click', function() { 
	$('#textarea-demo-height > .dropdown-value').text($('#textarea-demo-height > .dropdown-list > div').last().text());
	$('.textarea-demo-plugin').addClass('auto-height');
	$('#textarea-demo-dynheight').prop('checked', true).trigger('change');
});




$('#theme-demo-plugin-one').overlayScrollbars({
	className : 'os-theme-violet',
	paddingAbsolute: true,
	resize : 'both',
	scrollbars : {
		clickScrolling : true,
	}
});
$('#theme-demo-plugin-two').overlayScrollbars({
	className : 'os-theme-thin',
	paddingAbsolute: true,
	resize : 'both',
	scrollbars : {
		autoHide : 'leave',
		clickScrolling : true
	}
});
$('#theme-demo-plugin-three').overlayScrollbars({
	className : 'os-theme-minimal',
	paddingAbsolute: true,
	resize : 'both',
	scrollbars : {
		autoHide : 'scroll'
	}
});
var gradientTop = $('<div id="theme-demo-plugin-four-graidient-top"></div>');
var gradientBot = $('<div id="theme-demo-plugin-four-graidient-bottom"></div>');
var show = false;
var onScrollCallback = function() {
	var instance = this;
	var host = instance.getElements().host;
	var scrollInfo = instance.scroll();
	host.css({ 
		//'background' : 'rgba(' + Math.min(Math.round(54 * scrollInfo.y.ratio), 255) + ', ' + Math.max((255 - Math.round(190 * scrollInfo.y.ratio)), Math.round(190 * scrollInfo.y.ratio)) + ', ' + Math.max(Math.round(253 * scrollInfo.y.ratio), 30) + ', ' + 1 + ')',
		'background' : 'rgb(' + 
		(100 - Math.round((100 - 46) * scrollInfo.y.ratio)) + ', ' + 
		(97 - Math.round((97 - 190) * scrollInfo.y.ratio)) + ', ' + 
		(246 - Math.round((246 - 253) * scrollInfo.y.ratio)) + ')',
		'color' : 'rgb(' + Math.round(255 * scrollInfo.y.ratio) + ', ' + Math.round(255 * scrollInfo.y.ratio) + ', ' + Math.round(255 * scrollInfo.y.ratio) + ')'
	});
	if(show) {
		if(scrollInfo.y.ratio > 0)
			gradientTop.css('opacity', 1);
		else
			gradientTop.css('opacity', 0);
		
		if(scrollInfo.y.ratio < 1)
			gradientBot.css('opacity', 1);
		else
			gradientBot.css('opacity', 0);
	}
	else {
		gradientTop.css('opacity', 0);
		gradientBot.css('opacity', 0);
	}
};
$('#theme-demo-plugin-four').overlayScrollbars({
	paddingAbsolute: true,
	resize : 'both',
	callbacks : {
		onScroll : onScrollCallback,
		onInitialized : function() {
			var instance = this;
			var padding = instance.getElements().padding;
			gradientBot.insertAfter(padding);
			gradientTop.insertAfter(padding);
			onScrollCallback.bind(this)();
		},
		onOverflowChanged : function(e) {
			show = e.yScrollable && e.y;
			onScrollCallback.bind(this)();
		}
	}
});

var markElement;
var scrollDemo = $('#scroll-demo-plugin').overlayScrollbars({ 
	paddingAbsolute: true,
	callbacks : {
		onScrollStop : function() { 
			if(markElement) {
				var remove = markElement;
				markElement.addClass('blink');
				setTimeout(function() { 
					remove.removeClass('blink');
				}, 600);
			}
			markElement = undefined;
		},
	}
}).overlayScrollbars();
var scrollDemoCodeMirror = CodeMirror(document.getElementById("scroll-demo-codemirror"), {
	value: "scroll(0);",
	smartIndent : true,
	lineNumbers : true,
	lineWrapping: true,
	scrollbarStyle : null,
	cursorHeight: 0.85,
	indentWithTabs : true,
	indentUnit : 4,
	mode: { name: "javascript", json: true },
});
var scrollCodeMirrorChangeTimeout;
var scrollCodeMirrorChangeTimeoutDelay;
var scrollCodeMirrorOldValue;
var checkForSameVal = false;
scrollDemo.scroll(0);
scrollDemoCodeMirror.on("change", function(obj) {
	clearTimeout(scrollCodeMirrorChangeTimeout);
	scrollCodeMirrorChangeTimeout = setTimeout(function() {
		var value = scrollDemoCodeMirror.getValue();
		var indexScroll = value.indexOf('scroll');
		if(scrollCodeMirrorOldValue === value && checkForSameVal) {
			checkForSameVal = false;
			return;
		}
		$('#scroll-demo-codemirror').removeClass('codemirror-error');
		scrollCodeMirrorOldValue = value;
		value = value.substring(indexScroll);
		if(value !== undefined) {
			value = '.' + value.replace(/ /g, '');
			var elSplit = value.split('el:');
			if(elSplit.length > 1) {
				elSplit = elSplit[1].split('}')[0].split(',')[0].split('("');
				if(elSplit.length > 1) {
					elSplit = elSplit[1].split('")')[0];
					markElement = $(elSplit);
				}
			}
		}
		scrollDemo.scrollStop();
		try {
			eval('try { scrollDemo' + value + ' } catch(e) { $("#scroll-demo-codemirror").addClass("codemirror-error"); }');
		} catch(e) { 
			$('#scroll-demo-codemirror').addClass('codemirror-error');
		}
	}, scrollCodeMirrorChangeTimeoutDelay);
	scrollCodeMirrorChangeTimeoutDelay = 500;
});
$('#scroll-demo-reset').on('click', function() { 
	scrollCodeMirrorChangeTimeoutDelay = 0;
	scrollDemoCodeMirror.getDoc().setValue('scroll(0, 250);');
});
$('.scroll-demo-item').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	scrollDemoCodeMirror.getDoc().setValue('scroll($(".scroll-demo-item:nth-child(' + ($(this).index() + 1) + ')")' + ', 500);');
});
$('#scroll-demo-relative').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ x : "+=98", y : "+=98" }, 500);');
});
$('#scroll-demo-absolute').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ x : 333, y : 777 }, 500);');
});
$('#scroll-demo-units').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ x : "1vw - 33% - 30px", y : "1vh + 33% + 30px" }, 1000);');
});
$('#scroll-demo-calc').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ x : "((100% / 2) * 2) - 98", y : "((100% / 2) * 2) - 98" }, 1000);');
});
$('#scroll-demo-easing').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ x : "50%", y : "50%" }, 5000, "easeOutElastic");');
});
$('#scroll-demo-elementwmargin').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	checkForSameVal = true;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ el: ' + '$(".scroll-demo-item:nth-child(' + 69 + ')"), margin: true }' + ', 500);');
});
$('#scroll-demo-elementwomargin').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	checkForSameVal = true;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ el: ' + '$(".scroll-demo-item:nth-child(' + 69 + ')"), margin: false }' + ', 500);');
});
$('#scroll-demo-elementcmargin').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	checkForSameVal = true;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ el: ' + '$(".scroll-demo-item:nth-child(' + 69 + ')"), margin: [10, 10, 10, 10] }' + ', 500);');
});
$('#scroll-demo-blockend').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	checkForSameVal = true;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ el: ' + '$(".scroll-demo-item:nth-child(' + 169 + ')"), block : "end"}' + ', 500);');
});
$('#scroll-demo-blockarr').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	checkForSameVal = true;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ el: ' + '$(".scroll-demo-item:nth-child(' + 330 + ')"), block : ["end", "begin"] }' + ', 500);');
});
$('#scroll-demo-yonly').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	checkForSameVal = true;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ el: ' + '$(".scroll-demo-item:nth-child(' + 250 + ')"), axis : "y" }' + ', 500);');
});
$('#scroll-demo-xonly').on('click', function() {
	scrollCodeMirrorChangeTimeoutDelay = 0;
	checkForSameVal = true;
	scrollDemoCodeMirror.getDoc().setValue('scroll({ el: ' + '$(".scroll-demo-item:nth-child(' + 250 + ')"), axis : "x" }' + ', 500);');
});
$('#scroll-demo-rtl').on('change', function() { 
	if($(this).is(":checked"))
		$('#scroll-demo-plugin').css('direction', 'rtl');
	else
		$('#scroll-demo-plugin').css('direction', '');
	$('#scroll-demo-reset').trigger('click');
}).prop('checked', false);



$('.nesting-demo-element-plugin').overlayScrollbars({ });