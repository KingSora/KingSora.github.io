window._framework.defaultPagePath = 'options';

$('#radio-domelements-standard').on('radioon', function() { 
	$('.domelements-wrapper').removeClass('domelements-wrapper-textarea').addClass('domelements-wrapper-standard');
});
$('#radio-domelements-textarea').on('radioon', function() { 
	$('.domelements-wrapper').removeClass('domelements-wrapper-standard').addClass('domelements-wrapper-textarea');
});

$('#builtinthemes-theme-demo-none').overlayScrollbars({ className : null, paddingAbsolute : true, resize : "both" });
$('#builtinthemes-theme-demo-dark').overlayScrollbars({ className : 'os-theme-dark', paddingAbsolute : true, resize : "both" });
$('#builtinthemes-theme-demo-light').overlayScrollbars({ className : 'os-theme-light', paddingAbsolute : true, resize : "both" });

var classnamesDomDraftScrollbar = '.classnames-scrollbars-domdraft-element-scrollbar';
var classnamesDesignDraftScrollbar = '.classnames-scrollbars-designdraft-scrollbar';

var classnamesDomDraftScrollbarTrack = '.classnames-scrollbars-domdraft-element-scrollbar-track';
var classnamesDesignDraftScrollbarTrack = '.classnames-scrollbars-designdraft-scrollbar-track';

var classnamesDomDraftScrollbarHandle = '.classnames-scrollbars-domdraft-element-scrollbar-handle';
var classnamesDesignDraftScrollbarHandle = '.classnames-scrollbars-designdraft-scrollbar-handle';

var classnamesDomDraftScrollbarCorner = '.classnames-scrollbars-domdraft-element-corner';
var classnamesDesignDraftScrollbarCorner = '.classnames-scrollbars-designdraft-corner';

var strActive = 'active';
$(classnamesDesignDraftScrollbar + ', ' + classnamesDomDraftScrollbar).on('mouseover', function(e) { 
	$(classnamesDesignDraftScrollbar).addClass(strActive);
	$(classnamesDomDraftScrollbar).addClass(strActive);
	e.stopPropagation();
	e.preventDefault();
}).on('mouseout', function() {
	$(classnamesDesignDraftScrollbar).removeClass(strActive);
	$(classnamesDomDraftScrollbar).removeClass(strActive);
});

$(classnamesDesignDraftScrollbarTrack + ', ' + classnamesDomDraftScrollbarTrack).on('mouseover', function(e) { 
	$(classnamesDesignDraftScrollbarTrack).addClass(strActive);
	$(classnamesDomDraftScrollbarTrack).addClass(strActive);
	e.stopPropagation();
	e.preventDefault();
}).on('mouseout', function() {
	$(classnamesDesignDraftScrollbarTrack).removeClass(strActive);
	$(classnamesDomDraftScrollbarTrack).removeClass(strActive);
});

$(classnamesDesignDraftScrollbarHandle + ', ' + classnamesDomDraftScrollbarHandle).on('mouseover', function(e) { 
	$(classnamesDesignDraftScrollbarHandle).addClass(strActive);
	$(classnamesDomDraftScrollbarHandle).addClass(strActive);
	e.stopPropagation();
	e.preventDefault();
}).on('mouseout', function() {
	$(classnamesDesignDraftScrollbarHandle).removeClass(strActive);
	$(classnamesDomDraftScrollbarHandle).removeClass(strActive);
});

$(classnamesDesignDraftScrollbarCorner + ', ' + classnamesDomDraftScrollbarCorner).on('mouseover', function(e) { 
	$(classnamesDesignDraftScrollbarCorner).addClass(strActive);
	$(classnamesDomDraftScrollbarCorner).addClass(strActive);
	e.stopPropagation();
	e.preventDefault();
}).on('mouseout', function() {
	$(classnamesDesignDraftScrollbarCorner).removeClass(strActive);
	$(classnamesDomDraftScrollbarCorner).removeClass(strActive);
});
