$('.split-table').each(function() { 
	var elm = $(this);
	var templateTable = elm.find('table').first();
	var sideHead = elm.find('.split-table-side-head').first();
	var sideBody = elm.find('.split-table-side-body').first();
	var mainHead = elm.find('.split-table-main-head').first();
	var mainBody = elm.find('.split-table-main-body').first();
	sideHead.append(templateTable.clone());
	sideBody.append(templateTable.clone());
	mainHead.append(templateTable.clone());
	mainBody.append(templateTable.clone());
	
	var osSideBody = sideBody.overlayScrollbars({ 
		overflowBehavior : {
			x : 'hidden',
			y : 'hidden',
		},
		scrollbars : {
			visibility : 'hidden',
		}
	}).overlayScrollbars();
	var osMainHead = mainHead.overlayScrollbars({ 
		overflowBehavior : {
			x : 'hidden',
			y : 'hidden',
		},
		scrollbars : {
			visibility : 'hidden',
		}
	}).overlayScrollbars();
	var osMainBody = mainBody.overlayScrollbars({
		resize : 'v',
		callbacks : {
			onHostSizeChanged : function(e) { 
				sideBody.css("max-height", e.height);
			},
			onScroll : function() {
				osMainHead.scroll({ x : this.scroll().x.position });
				osSideBody.scroll({ y : this.scroll().y.position });
			}
		}
	}).overlayScrollbars();
});
$('[data-tooltip]').each(function() { 
	var el = this;
	var tt =  $(this).find('.tooltip').first();
	tippy(this, { 
		html : tt[0],
		arrow : true,
		interactive: true,
	})
});
