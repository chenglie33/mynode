// Navigation

(function( $ ) {


	'use strict';

	var $items = $( '.nav-sidebar > li.nav-parent' );

	function expand( li ) {
		li.children( 'ul.nav-children' ).slideDown( 'fast', function() {
			li.addClass( 'nav-expanded' );
			$(this).css( 'display', '' );
			ensureVisible( li );
		});
	}

	function collapse( li ) {
		li.children('ul.nav-children' ).slideUp( 'fast', function() {
			$(this).css( 'display', '' );
			li.removeClass( 'nav-expanded' );
		});
	}

	function ensureVisible( li ) {
		var scroller = li.offsetParent();
		if ( !scroller.get(0) ) {
			return false;
		}

		var top = li.position().top;
		if ( top < 0 ) {
			scroller.animate({
				scrollTop: scroller.scrollTop() + top
			}, 'fast');
		}
	}

	$items.on('click', function() {
		var prev = $( '.nav-sidebar > li.nav-expanded' ),
			next = $( this );

		if ( prev.get( 0 ) !== next.get( 0 ) ) {
			collapse( prev );
			expand( next );
		} else {
			collapse( prev );
		}
	});

	$items.find('.nav-children a').on( 'click', function( ev ) {
		ev.stopPropagation();
	});

}).apply( this, [ jQuery ]);


/*****
* CONFIGURATION
*/
function loadJS(e, t) {
  for (i = 0; i < e.length; i++) {
    var n = document.getElementsByTagName('body') [0],
    r = document.createElement('script');
    r.type = 'text/javascript';
    r.async = !1;
    r.src = e[i];
    n.appendChild(r)
  }
  if (t) {
    var n = document.getElementsByTagName('body') [0],
    r = document.createElement('script');
    r.type = 'text/javascript';
    r.async = !1;
    r.src = t;
    n.appendChild(r)
  }
}
function loadCSS(e, t) {
  if (!cssArray[e]) {
    cssArray[e] = !0;
    var n = document.getElementsByTagName('head') [0],
    r = document.createElement('link');
    r.setAttribute('rel', 'stylesheet');
    r.setAttribute('href', e);
    r.onload = t;
    n.appendChild(r)
  } else t && t()
}
function setUpUrl(e) {
  $('.nav li') .removeClass('active');
  $('.nav li:has(a[href="' + e + '"])') .addClass('active') .parent() .show();
  loadPage(e)
}
function loadPage(e) {
  var t = $('.main');
  $.ajax({
    type: 'GET',
    url: e,
    dataType: 'html',
    cache: !0,
    beforeSend: function () {
      t.css('opacity', 0.5)
    },
    success: function (e) {
      Pace.restart();
      $('html, body') .animate({
        scrollTop: 0
      }, 0);
      t.css({
        opacity: 0
      }) .html(e) .delay(250) .animate({
        opacity: 1
      }, 500)
    },
    error: function (e, n, r) {
      t.html('<h4 style="margin-top:90px;"><i class="fa fa-warning"></i> Error 404! Page not found.</h4>')
    },
    async: !1
  })
}
function dropSidebarShadow() {
  if ($('.nav-sidebar') .length) var e = $('.nav-sidebar') .offset() .top - $('.sidebar') .offset() .top;
  e < 60 ? $('.sidebar-header') .addClass('drop-shadow')  : $('.sidebar-header') .removeClass('drop-shadow');
  var t = $(window) .height() - $('.nav-sidebar') .outerHeight() - e;
  t < 130 ? $('.sidebar-footer') .addClass('drop-shadow')  : $('.sidebar-footer') .removeClass('drop-shadow')
}
function browser() {
  function i(e) {
    return e in document.documentElement.style
  }
  var e = !!window.opera && !!window.opera.version,
  t = i('MozBoxSizing'),
  n = Object.prototype.toString.call(window.HTMLElement) .indexOf('Constructor') > 0,
  r = !n && i('WebkitTransform');
  return e ? !1 : n || r ? !0 : !1
}
function retina() {
  retinaMode = window.devicePixelRatio > 1;
  return retinaMode
}
function activeCharts() {
  if ($('.boxchart') .length) if (retina()) {
    $('.boxchart') .sparkline('html', {
      type: 'bar',
      height: '60',
      barWidth: '8',
      barSpacing: '2',
      barColor: '#ffffff',
      negBarColor: '#eeeeee'
    });
    if (jQuery.browser.mozilla) if (!navigator.userAgent.match(/Trident\/7\./)) {
      $('.boxchart') .css('MozTransform', 'scale(0.5,0.5)') .css('height', '30px;');
      $('.boxchart') .css('height', '30px;') .css('margin', '-15px 15px -15px -5px')
    } else {
      $('.boxchart') .css('zoom', 0.5);
      $('.boxchart') .css('height', '30px;') .css('margin', '0px 15px -15px 17px')
    } else $('.boxchart') .css('zoom', 0.5)
  } else $('.boxchart') .sparkline('html', {
    type: 'bar',
    height: '30',
    barWidth: '4',
    barSpacing: '1',
    barColor: '#ffffff',
    negBarColor: '#eeeeee'
  });
  if ($('.linechart') .length) if (retina()) {
    $('.linechart') .sparkline('html', {
      width: '130',
      height: '60',
      lineColor: '#ffffff',
      fillColor: !1,
      spotColor: !1,
      maxSpotColor: !1,
      minSpotColor: !1,
      spotRadius: 2,
      lineWidth: 2
    });
    if (jQuery.browser.mozilla) if (!navigator.userAgent.match(/Trident\/7\./)) {
      $('.linechart') .css('MozTransform', 'scale(0.5,0.5)') .css('height', '30px;');
      $('.linechart') .css('height', '30px;') .css('margin', '-15px 15px -15px -5px')
    } else {
      $('.linechart') .css('zoom', 0.5);
      $('.linechart') .css('height', '30px;') .css('margin', '0px 15px -15px 17px')
    } else $('.linechart') .css('zoom', 0.5)
  } else $('.linechart') .sparkline('html', {
    width: '65',
    height: '30',
    lineColor: '#ffffff',
    fillColor: !1,
    spotColor: !1,
    maxSpotColor: !1,
    minSpotColor: !1,
    spotRadius: 2,
    lineWidth: 1
  });
  $('.chart-stat') .length && (retina() ? $('.chart-stat > .chart') .each(function () {
    var e = $(this) .css('color');
    $(this) .sparkline('html', {
      width: '180%',
      height: 80,
      lineColor: e,
      fillColor: !1,
      spotColor: !1,
      maxSpotColor: !1,
      minSpotColor: !1,
      spotRadius: 2,
      lineWidth: 2
    });
    if (jQuery.browser.mozilla) if (!navigator.userAgent.match(/Trident\/7\./)) {
      $(this) .css('MozTransform', 'scale(0.5,0.5)');
      $(this) .css('height', '40px;') .css('margin', '-20px 0px -20px -25%')
    } else $(this) .css('zoom', 0.5);
     else $(this) .css('zoom', 0.5)
  })  : $('.chart-stat > .chart') .each(function () {
    var e = $(this) .css('color');
    $(this) .sparkline('html', {
      width: '90%',
      height: 40,
      lineColor: e,
      fillColor: !1,
      spotColor: !1,
      maxSpotColor: !1,
      minSpotColor: !1,
      spotRadius: 2,
      lineWidth: 2
    })
  }))
}
function todoList() {
  $('.todo-list-tasks') .sortable({
    connectWith: '.todo-list-tasks',
    cancel: '.disabled'
  });
  $('.todo-list-tasks > li > label > .custom-checkbox') .change(function () {
    $(this) .parent() .parent() .clone() .appendTo('.completed') .addClass('disabled') .find('.custom-checkbox') .attr('disabled', !0);
    $(this) .parent() .parent() .slideUp('slow', function () {
      $(this) .remove()
    })
  });
  $('.todo-list') .disableSelection()
}
function discussionWidget() {
  $('.discussions') .find('.delete') .click(function () {
    $(this) .parent() .fadeTo('slow', 0, function () {
      $(this) .slideUp('slow', function () {
        $(this) .remove()
      })
    })
  })
}
function widthFunctions(e) {
  $('.timeline') && $('.timeslot') .each(function () {
    var e = $(this) .find('.task') .outerHeight();
    $(this) .css('height', e)
  });
  var t = $('.navbar, .page-header') .outerHeight(),
  n = $('footer') .outerHeight(),
  r = $(window) .height(),
  i = $(window) .width();
  $('.sidebar-menu') .css('height', r - 200);
  i < 992 && $('body') .removeClass('sidebar-minified');
  i > 768 && $('.main') .css('min-height', r - n)
}
$.ajaxLoad = !1;
var cssArray = {
};
if ($.ajaxLoad) {
  paceOptions = {
    elements: !1,
    restartOnRequestAfter: !1
  };
  url = location.hash.replace(/^#/, '');
  url != '' ? setUpUrl(url)  : setUpUrl($.defaultPage);
  $(document) .on('click', '.nav a[href!="#"]', function (e) {
    if ($(this) .attr('target') == '_blank') {
      e.preventDefault();
      $this = $(e.currentTarget);
      window.open($this.attr('href'))
    } else if ($(this) .attr('target') == '_top') {
      e.preventDefault();
      $this = $(e.currentTarget);
      window.location = $this.attr('href')
    } else {
      e.preventDefault();
      var t = $(e.currentTarget);
      window.location.hash = t.attr('href');
      setUpUrl(t.attr('href'))
    }
  })
}
$(document) .ready(function (e) {
  e('ul.nav-sidebar') .find('a') .each(function () {
    if (e(e(this)) [0].href == String(window.location)) {
      e(this) .parent() .addClass('active');
      e(this) .parents('ul') .add(this) .each(function () {
        e(this) .show() .parent() .addClass('opened')
      })
    }
  });
  e('.nav-sidebar a') .click(function (t) {
    e.ajaxLoad && t.preventDefault();
    if (e(this) .parent() .find('ul') .size() != 0) {
      e(this) .parent() .hasClass('opened') ? e(this) .parent() .removeClass('opened')  : e(this) .parent() .addClass('opened');
      e(this) .parent() .find('ul') .first() .slideToggle('slow', function () {
        dropSidebarShadow()
      });
      e(this) .parent() .parent() .parent() .hasClass('opened') || e('.nav a') .not(this) .parent() .find('ul') .slideUp('slow', function () {
        e(this) .parent() .removeClass('opened')
      })
    } else e(this) .parent() .parent() .parent() .hasClass('opened') || e('.nav a') .not(this) .parent() .find('ul') .slideUp('slow', function () {
      e(this) .parent() .removeClass('opened')
    })
  });
			
  e('#main-menu-toggle') .click(function () {
    e('body') .hasClass('sidebar-hide') ? e('body') .removeClass('sidebar-hide')  : e('body') .addClass('sidebar-hide')
  });
  e('#sidebar-menu') .click(function () {
    e('.sidebar') .trigger('open')
  })
});
$(document) .ready(function (e) {
  widthFunctions();
  dropSidebarShadow();
  e('.sidebar') .mmenu();
  e('a[href="#"][data-top!=true]') .click(function (e) {
    e.preventDefault()
  });
  e('#myTab a:first') .tab('show');
  e('#myTab a') .click(function (t) {
    t.preventDefault();
    e(this) .tab('show')
  });
  e('[rel="tooltip"],[data-rel="tooltip"]') .tooltip({
    placement: 'bottom',
    delay: {
      show: 400,
      hide: 200
    }
  });
  e('[rel="popover"],[data-rel="popover"],[data-toggle="popover"]') .popover();
  e('.btn-close') .click(function (t) {
    t.preventDefault();
    e(this) .parent() .parent() .parent() .fadeOut()
  });
  e('.btn-minimize') .click(function (t) {
    t.preventDefault();
    var n = e(this) .parent() .parent() .next('.panel-body');
    n.is(':visible') ? e('i', e(this)) .removeClass('fa-chevron-up') .addClass('fa-chevron-down')  : e('i', e(this)) .removeClass('fa-chevron-down') .addClass('fa-chevron-up');
    n.slideToggle('slow', function () {
      widthFunctions()
    })
  });

  e('.btn-setting').live('click',function(){

      t.preventDefault();
      e('#myModal') .modal('show')

  })
  e('.button-finish') .live('click',function (t) {
    t.preventDefault();
    e('#finish-button') .modal('show')
  })
});
$('.sidebar-menu') .scroll(function () {
  dropSidebarShadow()
});
$(window) .bind('resize', widthFunctions);



