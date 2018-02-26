$(document).ready(function() {
	var _base = this;
	var _htmlPath = 'html/';
	var _htmlExtension = '.html';
	var _cssPath = 'css/';
	var _cssExtension = '.css';
	var _jsPath = 'js/';
	var _jsExtension = '.js';
	var _mainIndexPath = '../_framework/index' + _htmlExtension;
	var _defaultConfig = {
		defaultHash : 'overview'
	};
	var _dataAttrNavigation = "data-navigation";
	var _dataAttrTabKey = "data-tab-key";
	var _dataAttrTabValue = "data-tab-value";
	var _dataAttrExpanderKey = "data-expander-key";
	var _dataAttrExpanderValue = "data-expander-value";
	var _dataAttrRadio = "data-radio";
	var _expanderExpandDuration = 230;
	var _tabsFadeDuration = 230;
	var _strActive = 'active';
	var _finalConfig;
	var _defaultHash;
	var _hasherPrepareHash = '!';
	var _hasherSeparator = '/';
	var _nav;
	var _window;
	var _header;
	var _content;
	var _footer;
	var _loading;
	var _loadingTimeoutId;
	var _mainNavigationItems;
	var _fourZeroFourPath = '../_framework/html/404' + _htmlExtension;
	var _fourZeroFourFaces = [ 
		" ಠ_ಠ ", "(＃｀д´)ﾉ", "ლ(ಠ_ಠლ)", "(；￣Д￣）", "¯\\_(ツ)_/¯", "ᕕ( ͡° ͜ʖ ͡° )ᕗ", "(☞ﾟヮﾟ)☞    ☜(ﾟヮﾟ☜)", "͡° ͜ʖ ͡°", "ヽ( ಠ益ಠ )ﾉ", " (╯°□°）╯︵ ┻━┻", "(ಠ_ಠ)",
		"(`･Д･)ノ=☆", "★≡≡＼（`△´＼）", "（◞‸◟）", "(／‵Д′)／~ ╧╧", "┻━┻ ︵﻿ ¯\\_༼ᴼل͜ᴼ༽_/¯ ︵ ┻━┻", "¯\\_(⊙_ʖ⊙)_/¯", "┐(´～｀)┌", "乁( ⁰͡  Ĺ̯ ⁰͡ ) ㄏ", "(；・∀・)", "(^◇^；)"
	];
	var _mainScrollElement = $('body').overlayScrollbars({
		nativeScrollbarsOverlaid : {
			initialize : false
		}
	}).overlayScrollbars();
	
	function showLoading() {
		if(_mainScrollElement)
			_mainScrollElement.sleep(); //put to sleep
		_loading.addClass(_strActive);
		_content.css('opacity', 0); 
	}
	
	function hideLoading() {
		if(_mainScrollElement)
			_mainScrollElement.update(); //wakeup from sleeping
		_nav.overlayScrollbars().options('overflowBehavior.x', 'scroll');
		_nav.overlayScrollbars().update(true); //FF fix for fixed elements.
		if(!_header.hasClass('shrinked')) {
			_nav.overlayScrollbars().options('overflowBehavior.x', 'hidden');
		}
		_loading.removeClass(_strActive);
		_content.css('opacity', 1); 
	}
	
	function setBodyScrollbars() {
		if(_mainScrollElement) {
			_mainScrollElement.options({
				callbacks : { 
					onScroll : function() { 
						updateContentNavigation();
					},
					onHostSizeChanged : function() {
						updateContentNavigation();
					},
					onContentSizeChanged : function() {
						updateContentNavigation();
					}
				}
			});
		}
		else {
			_window.off('scroll', updateContentNavigation).on('scroll', updateContentNavigation);
			_window.off('resize', updateContentNavigation).on('resize', updateContentNavigation);
		}
	}
	
	function onHashChange(newHash, oldHash){
		newHash = newHash.toLowerCase();
		oldHash = oldHash !== undefined ? oldHash.toLowerCase() : oldHash;
		var oldMainHash = oldHash === undefined ? '' : oldHash.split(_hasherSeparator)[0];
		var newMainHash = newHash.split(_hasherSeparator)[0];
		if(oldMainHash !== newMainHash) {
			_content.off();
			try {
				window._framework.onPagePathChange = undefined;
				window._framework.defaultPagePath = undefined;
				delete window._framework.onPagePathChange;
				delete window._framework.defaultPagePath;
			}
			catch(ex) { }

			showLoading();
			$.get(_htmlPath + newMainHash + _htmlExtension, function(response) {
				setTimeout(function() {
					var instances = $('#content *').overlayScrollbars('!');
					$.each(instances, function(index, instance) {
						instance.destroy();
					});
					//load correct content:
					_content.html(response);
					contentLoad(newMainHash);
					$.getScript(_jsPath + newMainHash + _jsExtension).always(function() {
						pagePathChange(newHash, oldHash);
						hideLoading();
					});				
				}, 222);
			}, "html").fail(function() {
				//404
				$.get(_fourZeroFourPath, function(response) {
					_content.html(response);
					$('#four-zero-four-face').html(_fourZeroFourFaces[Math.floor((Math.random() * (_fourZeroFourFaces.length - 1)) + 0)]);
				}, "html");
				
				pagePathChange(newHash, oldHash);
				hideLoading();
			}).always(function() { 
				//refresh navigation:
				_mainNavigationItems.removeClass(_strActive);
				$.each(_mainNavigationItems, function() { 
					var item = $(this);
					if(item.attr(_dataAttrNavigation) === newMainHash) {
						item.addClass(_strActive);
					}
				});
				if(newMainHash === _defaultHash) {
					_header.removeClass('shrinked');
				}
				else {
					_header.addClass('shrinked');
					_nav.overlayScrollbars().update();
				}
				
				//scroll To top:
				if(_mainScrollElement)
					_mainScrollElement.scroll({ y : 0 });
				else
					_window.scrollTop(0);
			});
		}
		else
			pagePathChange(newHash, oldHash);
	}
	
	function pagePathChange(newHash, oldHash) {
		//Generate correct hash after data-navigation element was klicked
		$('[' + _dataAttrNavigation + ']').on('click', function(e) {
			var ee = e.originalEvent || e;
			//on strg + left mouse button OR middle mouse button
			if((ee.ctrlKey !== undefined && ee.ctrlKey === true && (ee.which === 1 || ee.buttons === 1 || ee.buttons === 4 || ee.which === 2))) {
				var navigationValue = $(this).closest('[' + _dataAttrNavigation + ']').attr(_dataAttrNavigation);
				var newHashArray = generateHashArray(navigationValue);
				var newHashArrayParamString = '#' + _hasherPrepareHash;
				for(var i = 0; i < newHashArray.length; i++)
					newHashArrayParamString += (i == 0 ? "" : _hasherSeparator) + newHashArray[i] + "";
				window.open(hasher.getBaseURL() + newHashArrayParamString, '_blank');
				
				e.stopPropagation();
				e.stopImmediatePropagation();
				return false;
			}
		});	
		//$('[' + _dataAttrNavigation + ']').on('mousedown', function(e) {
		//	var ee = e.originalEvent || e;
		//	//on middle mouse button
		//	if((ee.buttons === 4 || ee.which === 2)) {
		//		var navigationValue = $(this).closest('[' + _dataAttrNavigation + ']').attr(_dataAttrNavigation);
		//		var newHashArray = generateHashArray(navigationValue);
		//		var newHashArrayParamString = '#' + _hasherPrepareHash;
		//		for(var i = 0; i < newHashArray.length; i++)
		//			newHashArrayParamString += (i == 0 ? "" : _hasherSeparator) + newHashArray[i] + "";
		//		window.open(hasher.getBaseURL() + newHashArrayParamString, '_blank');
		//		
		//		e.stopPropagation();
		//		e.stopImmediatePropagation();
		//		return false;
		//	}
		//});
		$('[' + _dataAttrNavigation + ']').on('mousedown', function(e) {
			var ee = e.originalEvent || e;
			
			//on normal mouse click
			if((ee.which === 1 || ee.buttons === 1 || ee.button === 1) && ee.ctrlKey !== true) {
				var navigationValue = $(this).closest('[' + _dataAttrNavigation + ']').attr(_dataAttrNavigation);
				var newHashArray = generateHashArray(navigationValue);
				var newHashArrayParamString = '';
				for(var i = 0; i < newHashArray.length; i++)
					newHashArrayParamString += "\"" + newHashArray[i] + "\", ";
				newHashArrayParamString = newHashArrayParamString.substring(0, newHashArrayParamString.length - 2);

				window.eval('hasher.setHash(' + newHashArrayParamString + ');');
			}
		});
		
		
		var oldMainHash = oldHash === undefined ? '' : oldHash.split(_hasherSeparator)[0];
		var newMainHash = newHash.split(_hasherSeparator)[0];
		var newHashArray = newHash.split(_hasherSeparator);
		var oldHashArray = oldHash === undefined ? [] : oldHash.split(_hasherSeparator);
		var offsetChange = -1;
		var path = [ ];
		if(newHashArray.length > oldHashArray.length) {
			$.each(newHashArray, function(i) {
				if(newHashArray[i] !== oldHashArray[i]) {
					offsetChange = i;
					return false;
				}
			});
		}
		else {
			$.each(oldHashArray, function(i) {
				if(oldHashArray[i] !== newHashArray[i]) {
					offsetChange = i;
					return false;
				}
			});
		}
		if(oldMainHash === newMainHash)
			offsetChange -= 1;

		for(var i = 0; i < newHashArray.length; i++) {
			if(i === 0)
				continue;
			var curr = newHashArray[i];
			var name = curr;
			path.push(name);
		}
		
		if($.type(window._framework.onPagePathChange) === 'function') {
			window._framework.onPagePathChange({
				isEmpty : newHashArray.length <= 1,
				changedAt : offsetChange,
				path : path,
			});
		}
		
		//if a default tab shall be selected
		if(newHashArray.length === 1 && offsetChange === 0 && window._framework.defaultPagePath)
			hasher.replaceHash(newHashArray[0], window._framework.defaultPagePath)

		//Main tabcontrol hashchange functionality
		if(newHashArray.length > 1 && offsetChange === 0) {
			var possibleTabItems = $('#content-navigation').find('.content-navigation-item-clickable[data-navigation]');
			$.each(possibleTabItems, function() { 
				var item = $(this);
				var itemNavAttr = item.attr('data-navigation').toLowerCase();
				if(itemNavAttr !== undefined)
					itemNavAttr = itemNavAttr.replace(/[0-9]/,"").replace(/[[]]/g,"");
				
				if(itemNavAttr === path[offsetChange]) {
					item.trigger('click');
					var tabKeyAttr = item.attr(_dataAttrTabKey);
					if(tabKeyAttr !== undefined && tabKeyAttr !== null) {
						var tabContent = $('[' + _dataAttrTabValue + '="' + tabKeyAttr + '"]');
						tabContent.find('code:not(.hljs)').each(function(i, element) {
							hljs(element); 
						});
						
						//custom scrollbar on code
						$.each(tabContent.find('pre > code.hljs'), function() { 
							var elem = $(this);
							var hideY = !elem.hasClass('expandable');
							if(!elem.hasClass('code-noscroll') && elem.overlayScrollbars() === undefined) {
								elem.overlayScrollbars({ 
									paddingAbsolute : true, 
									overflowBehavior : {
										y : hideY ? "hidden" : "scroll"
									}
								});
							}
						});
						//manage code mirrors
						setTimeout(function() {
							$('.CodeMirror').each(function(i, el){
								if(el.offsetHeight > 0)
									el.CodeMirror.refresh();
							});
						}, 300);
					}
				}
			});
		}
	}
	
	function contentLoad(currentMainHash) {
		updateContentNavigation();

		//custom scrollbar on content menu (sidebar menu)
		$('#content-navigation').overlayScrollbars({ 
			scrollbars : { 
				autoHide : 'leave',
			},
			overflowBehavior : {
				x : 'hidden'
			}
		});

		//dropdown
		$('.dropdown').on('click', function(e) {
			var dropdown = $(this).closest('.dropdown');
			var isActive = false;
			if(dropdown.hasClass(_strActive))
				isActive = true;
			
			$('.dropdown.active').removeClass(_strActive);
			
			if(isActive)
				dropdown.removeClass(_strActive);
			else
				dropdown.addClass(_strActive);
			
			if(dropdown.hasClass(_strActive)) {
				$('body').one('click', function() { 
					dropdown.removeClass(_strActive);
				});
			}
			e.stopPropagation();
			e.stopImmediatePropagation();
			return false;
		});
		$('.dropdown-list > div').on('click', function(e) { 
			var dropdown = $(this).closest('.dropdown');
			var dropdownValue = dropdown.find('.dropdown-value');
			dropdownValue.text($(this).text());
			dropdown.removeClass(_strActive);
			dropdown.trigger('dropdownvaluechanged', [ dropdownValue.text() ]);
			e.stopPropagation();
			e.stopImmediatePropagation();
			return false;
		});
		
		//radio buttons
		$('[' + _dataAttrRadio + ']').on('click', function(e) { 
			var target = $(e.target);
			var attr = target.attr(_dataAttrRadio);
			
			if(target.hasClass(_strActive))
				return;
				
			$('[' + _dataAttrRadio + '="' + attr + '"]').removeClass(_strActive).trigger("radiooff");
			target.addClass(_strActive).trigger("radioon");
		});
		
		//expander
		$('[' + _dataAttrExpanderKey + ']').on('click', function(e) { 
			var currElem = $(this).closest('[' + _dataAttrExpanderKey + ']');
			var target = $('[' + _dataAttrExpanderValue + '="' + currElem.attr(_dataAttrExpanderKey) + '"]');
			if(target.hasClass(_strActive)) {
				target.stop().slideUp(_expanderExpandDuration);
				currElem.removeClass(_strActive);
				target.removeClass(_strActive);
			}
			else {
				target.stop().slideDown(_expanderExpandDuration);
				currElem.addClass(_strActive);
				target.addClass(_strActive);
			}
		});
		
		//tabs
		$('[' + _dataAttrTabValue + ']:not(.' + _strActive + ')').hide();
		$('[' + _dataAttrTabKey + ']').on('click', function(e) { 
			var currElem = $(this).closest('[' + _dataAttrTabKey + ']');
			if(currElem.hasClass(_strActive)) {
				e.stopPropagation();
				e.stopImmediatePropagation();
				return false;
			}
			var ee = e.originalEvent || e;
			if(ee.ctrlKey !== undefined && ee.ctrlKey === true && (ee.which === 1 || ee.buttons === 1)) {
				return false;
			}

			var target = $('[' + _dataAttrTabValue + '="' + currElem.attr(_dataAttrTabKey) + '"]');
			var parent = target.parent();
			var currActive = parent.children('.' + _strActive).first().removeClass(_strActive);
			var doScroll = parent.attr('id') === 'content-navigation-main';
			var action = function() {
				target.stop().fadeIn(_tabsFadeDuration).addClass(_strActive);
				if(doScroll) {
					if(_mainScrollElement)
						_mainScrollElement.scroll({ y : 0 });
					else
						_window.scrollTop(0);
				}
			};
			if(currActive.length === 0)
				action();
			else
				currActive.stop().fadeOut(_tabsFadeDuration, action);
			
			currElem.parent().find('[' + _dataAttrTabKey + ']').removeClass(_strActive);
			currElem.addClass(_strActive);
		});
		
		//options table expand on click
		$('.options-table > tbody > tr:nth-child(2n+1)').on('click', function(e) {		
			var current = $(e.target).closest('tr');
			var target = current.next().find('div').first();
			target.stop().slideToggle(300, 'easeOutCirc');
			if(current.hasClass(_strActive))
				current.removeClass(_strActive);
			else
				current.addClass(_strActive);
		});
		$('.options-table > tbody > tr:nth-child(2n+1) code').on('click', function(e) { 
			e.stopPropagation();
			e.stopImmediatePropagation();
			return false;
		});
		
		$('#content-navigation-button').on('click', function() { 
			$('#content-navigation-button').toggleClass(_strActive);
		});
		
		if($('#content-navigation-main').length > 0) {
			//code highlight js on default visible tab element
			$('#content-navigation-main > div:visible').find('code').each(function(i, element) {
				hljs(element); 
			});
			
			//custom scrollbar on code on default visible tab element
			$.each($('#content-navigation-main > div:visible').find('pre > code.hljs'), function() { 
				var elem = $(this);
				var hideY = !elem.hasClass('expandable');
				if(!elem.hasClass('code-noscroll') && elem.overlayScrollbars() === undefined) {
					elem.overlayScrollbars({ 
						paddingAbsolute : true, 
						overflowBehavior : {
							y : hideY ? "hidden" : "scroll"
						}
					});
				}
			});
		}
		else {
			//code highlight js on default visible tab element
			$('code').each(function(i, element) {
				hljs(element); 
			});
			
			//custom scrollbar on code on default visible tab element
			$.each($('pre > code.hljs'), function() { 
				var elem = $(this);
				if(!elem.hasClass('code-noscroll') && elem.overlayScrollbars() === undefined) {
					elem.overlayScrollbars({ 
						paddingAbsolute : true, 
						overflowBehavior : {
							y : "hidden"
						}
					});
				}
			});
		}
		
		
		
		//code expand and shrink
		$('code.expandable').each(function(i, element) { 
			var strExpanded = 'expanded';
			var strExpandContent = 'Expand<i class="mdi mdi-chevron-down"></i>';
			var strShrinkContent = 'Shrink<i class="mdi mdi-chevron-up"></i>';
			var appendElement = $('<span class="expandable-button">' + strExpandContent + '</span>');
			appendElement.on('click', function() { 
				var codeElement = $(this).parent();
				if($(codeElement).hasClass(strExpanded)) {
					$(this).html(strExpandContent);
					codeElement.removeClass(strExpanded);
				}
				else {
					$(this).html(strShrinkContent);
					codeElement.addClass(strExpanded);
				}
			});
			$(element).append(appendElement);
		});
		
	}
	
	function updateContentNavigation() { 
		var contentNav = $('#content-navigation');
		var viewportHeight = $(window).height();
		var contentNavHeight = contentNav.height();
		var contentNavWrapperHeight = _content.height();
		var scrollTop = _mainScrollElement ? _mainScrollElement.scroll().y.position : _window.scrollTop();
		var scrollLeft = _mainScrollElement ? _mainScrollElement.scroll().x.position : _window.scrollLeft();
		var navHeight = _nav.height();;
		var maxHeight = Math.min(viewportHeight - navHeight, contentNavWrapperHeight - scrollTop);
		
		
		if(OverlayScrollbars.globals().supportTransform) {
			translateElement(contentNav, -scrollLeft, 0);
		}
		else {
			contentNav.css('left', -scrollLeft);
		}

		contentNav.css('max-height', maxHeight);
		
		if(_nav.overlayScrollbars())
			_nav.overlayScrollbars().scroll([ scrollLeft , 0 ]);
		else 
			_nav.scrollLeft(scrollLeft);
	}
	
	function generateHashArray(navigationValue) {
		navigationValue = navigationValue.replace(/\s/g,'');
		var currHashArray = hasher.getHashAsArray();
		var newHashArray = [ ];
		var indexOfOffsetBracketOpen = navigationValue.indexOf('[');
		var indexOfOffsetBracketClose = navigationValue.indexOf(']');
		var offset = 0;
		if(indexOfOffsetBracketOpen === 0 && (indexOfOffsetBracketClose === 2 || indexOfOffsetBracketClose === 3 || indexOfOffsetBracketClose === 4)) {
			offset = parseInt(navigationValue.split(']')[0].substring(1, indexOfOffsetBracketClose));
			if(isNaN(offset))
				throw "Invalid navigation offset value!";
		}
		
		var navigationValueSplit = navigationValue.split(']');
		if(navigationValueSplit.length === 1)
			navigationValue = navigationValue;
		else
			navigationValue = navigationValueSplit[1];

		for(var i = 0; i < offset + 1; i++) 
			newHashArray[i] = currHashArray[i];
		
		newHashArray[offset] = navigationValue;
		if(navigationValue === '')
			newHashArray.splice(offset, 1);

		for(var i = 0; i < newHashArray.length; i++) 
			newHashArray[i] = newHashArray[i].toLowerCase();
		
		return newHashArray;
	}
	
	function hljs(element) {
		if(window.hljs !== undefined) {
			window.hljs.highlightBlock(element); 
		}
	}
	
	function translateElement(element, x, y) {
		var vendors = [ '', '-webkit-', '-moz-', '-o-', '-ms-' ];
		for(var i = 0; i < vendors.length; i++)
			element.css('transform', vendors[i] + 'translate(' + (x) + 'px, ' + (y) + 'px)');
	}
	
	_base.buildPage = function(config, callback) { 
		_finalConfig = $.extend(true, { }, _defaultConfig, config);
		_defaultHash = _finalConfig.defaultHash;
		_mainNavigationItems = $('[' + _dataAttrNavigation + ']');
		_window = $(window);
		_header = $('#header');
		_nav = $('#navigation');
		_content = $('#content');
		_footer = $('#footer');
		_loading = $('#loading');
		
		
		//setup hasher
		hasher.prependHash = _hasherPrepareHash;
		hasher.separator = _hasherSeparator;
		if (hasher.getURL() === hasher.getBaseURL())
			hasher.replaceHash(_defaultHash);
		hasher.initialized.add(onHashChange); //parse initial hash
		hasher.changed.add(onHashChange); //parse hash changes
		hasher.init(); //start listening for hash changes
		
		setTimeout(function () { 
			$('body').addClass('ready');
		}, 100);
		
		$('#navigation-logo').on('click', function() {
			hasher.setHash(_defaultHash);
		});
		_nav.overlayScrollbars({ 
			className : 'os-theme-light',
			scrollbars : {
				visibility : "hidden",
				autoHide : "leave"
			},
			overflowBehavior : { y : 'hidden' } 
		});
		setBodyScrollbars();
	};
	
	window._framework = _base;	
});
