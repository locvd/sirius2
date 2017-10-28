/**
 * Created by locvd on 2017/10/28.
 */

import CollectionType from '../../../../lib/enum/CollectionType.js';

Template.siriusMemberDetails.onCreated(function () {
  let vm = this;
  vm.autorun(function () {
    vm.subscribe(CollectionType.SINGLE_MEMBER, vm.data.memberCode);
  });
});

Template.siriusMemberDetails.onRendered(function () {
  // console.log(this);
  //popup-gallery
  $('#siriusmemberdetailscarouselslide').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    fixedContentPos: true,
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile mfp-no-margins mfp-with-zoom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title');
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    }
  });
});

Template.siriusMemberDetails.helpers({
  member: function () {
    return SiriusMembers.findOne();
  },
  getPhotoIndex: function (photos, photo) {
    return photos.indexOf(photo);
  },
  extendedClass: function (photos, photo) {
    return photos.indexOf(photo) === 0 ? "active" : "";
  }
});
