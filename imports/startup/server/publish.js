/**
 * Created by locvd on 2017/10/28.
 */

import CollectionType from "../../../lib/enum/CollectionType.js";

export default function publish() {
  Meteor.publish(CollectionType.ALL_MEMBER, function () {
    return SiriusMembers.find();
  });
  Meteor.publish(CollectionType.PUBLIC_MEMBER, function () {
    return SiriusMembers.find({
      "profile.publish": true
    });
  });
  Meteor.publish(CollectionType.FILTERED_ALL_MEMBER, function (query) {
    return SiriusMembers.find(query);
  });
  Meteor.publish(CollectionType.FILTERED_PUBLIC_MEMBER, function (query) {
    query.profile.publish = true;
    return SiriusMembers.find(query);
  });
  Meteor.publish(CollectionType.SINGLE_MEMBER, function (memberCode) {
    return SiriusMembers.find({memberCode: memberCode});
  });

  Meteor.publish(CollectionType.ALL_ACTIVITY, function () {
    return SiriusActivities.find();
  });
}