/**
 * Created by locvd on 2017/10/26.
 */

import CollectionType from '../../../../lib/enum/CollectionType.js';

Template.siriusMemberListAdmin.onCreated(function () {
  let vm = this;
  vm.autorun(function () {
    vm.subscribe(CollectionType.ALL_MEMBER);
  });
  vm.memberToUpdate = new ReactiveVar(null);
});

Template.siriusMemberListAdmin.helpers({
  members: function () {
    return SiriusMembers.find({});
  },
  profilePicture: function (member) {
    return member.photos[0];
  },
  birthDate: function (member) {
    return member.basicInformation.birthDate.toLocaleDateString('vi-VN');
  },
  memberToUpdate: function () {
    let memberId = Template.instance().memberToUpdate.get();
    return SiriusMembers.findOne({_id: memberId});
  }
});

Template.siriusMemberListAdmin.events({
  'click .btn-sm': function (event, instance) {
    instance.memberToUpdate.set(event.toElement.id);
  },
  'click .btn-danger': function (event, instance) {
    SiriusMembers.remove({_id: event.toElement.id});
  },
  'click #updateMemberCancelBtn': function (event, instance) {
    instance.memberToUpdate.set(null);
  }
});
