/**
 * Created by locvd on 2017/10/26.
 */

Template.siriusNavbar.onRendered(function () {

  'use strict';

  if (typeof $ === 'undefined') { throw new Error('This site\'s JavaScript requires jQuery'); }

  // cache common elements
  var $win  = $(window);
  var $doc  = $(document);
  var $body = $('body');

  // Show sticky topbar on scroll
  // -----------------------------------

  var stickyNavScroll;
  var stickySelector = '.topnavbar-wrapper';

  // Setup functions based on screen
  if (matchMedia('(min-width: 768px)').matches) {
    stickyNavScroll = function () {
      var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      if (top > 40) $(stickySelector).stop().animate({'top': '0'});

      else $(stickySelector).stop().animate({'top': '-55'});
    };
  }

  if (matchMedia('(max-width: 767px)').matches) {
    stickyNavScroll = function () {
      var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      if (top > 40) $(stickySelector).stop().animate({'top': '0'});

      else $(stickySelector).stop().animate({'top': '-114'});
    };
  }

  // Finally attach to events
  $doc.ready(stickyNavScroll);
  $win.scroll(stickyNavScroll);


  // Sticky Navigation
  // -----------------------------------

  $(function() {

    $('.main-navbar').onePageNav({
      scrollThreshold: 0.25,
      filter: ':not(.external)', // external links
      changeHash: true,
      scrollSpeed: 750
    });

  });
});