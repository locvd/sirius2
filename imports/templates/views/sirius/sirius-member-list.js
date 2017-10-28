/**
 * Created by locvd on 2017/10/27.
 */

import CollectionType from '../../../../lib/enum/CollectionType.js';

Template.siriusMemberList.onCreated(function () {
  let vm = this;
  vm.autorun(function () {
    vm.subscribe(CollectionType.PUBLIC_MEMBER);
  });
});

Template.siriusMemberList.helpers({
  members: function () {
    return SiriusMembers.find({}, {
      sort: {
        createdTime: -1
      }
    });
  },
  profilePicture: function (member) {
    return member.photos[0];
  },
  calculateAge: function (member) {
    let cur = new Date();
    return Math.floor((cur - member.basicInformation.birthDate) / 31557600000);
  },
  registeredDate: function (member) {
    let date = member.createdTime;
    let mm = (date.getMonth() + 1).toString();
    let dd = date.getDate().toString();
    return mm + '/' + dd;
  },
  memberDetailPath: function (member) {
    return "/membercode/" + member.memberCode;
  }
});
