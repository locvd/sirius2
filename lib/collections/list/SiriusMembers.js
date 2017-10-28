/**
 * Created by locvd on 2017/04/23.
 */
import SiriusMemberSchema from '../schema/SiriusMemberSchema';
import ActivityType from "../../enum/ActivityType";
import SiriusMethod from "../../enum/SiriusMethods";
import CollectionType from "../../enum/CollectionType";

SiriusMembers = new Meteor.Collection('siriusMembers');

SiriusMembers.attachSchema(SiriusMemberSchema);

SiriusMembers.allow({
  insert: function (userId, doc) {
    return !!userId;
  },
  update: function (userId, doc) {
    return !!userId;
  },
  remove: function (userId, doc) {
    return !!userId;
  }
});
SiriusMembers.deny({
  insert: function (userId, doc) {
    return !userId;
  },
  update: function (userid, doc) {
    return !userId;
  },
  remove: function (userId, doc) {
    return !userId;
  }
});

Meteor.methods({
  [SiriusMethod.MEMBER_INSERT]: function (profile, callback) {
    // Check for last activity of insert in the same day
    let lastActivity = SiriusActivities.findOne({
      activityType: ActivityType.INSERT
    }, {
      sort: {
        createdTime: -1,
        limit: 1
      }
    });
    let lastMemberCode = 1;
    if (lastActivity) {
      lastMemberCode = lastActivity.lastMemberCode + 1;
    }
    // let photoFiles = profile.photoFiles;
    // console.log(photoFiles);
    let currentTime = new Date();

    profile.createdTime = currentTime;
    profile.updatedTime = currentTime;
    profile.memberCode = lastMemberCode;

    let vm = this;
    console.log("Inserting member with memberCode = " + lastMemberCode);
    return SiriusMembers.insert(profile, function (err, res) {

      if (!err) {
        Meteor.call(SiriusMethod.ACTIVITY_INSERT, {
          activityType: ActivityType.INSERT,
          userId: vm.userId,
          lastMemberCode: lastMemberCode,
          members: [profile]
        }, function (err, res) {
          if (err) {
            //Handle error here
          }
          if (res) {
            // handle result here
          }
        });
      }

      if (typeof callback === "function") {
        callback(err, res);
      }
    });
  },
  [SiriusMethod.MEMBER_UPDATE]: function (profile, callback) {
    let lastActivity = SiriusActivities.findOne({
      activityType: ActivityType.INSERT
    }, {
      sort: {
        createdTime: -1,
        limit: 1
      }
    });

    let lastMemberCode = profile.memberCode;

    let currentTime = new Date();
    profile.updatedTIme = currentTime;
    let vm = this;

    console.log("Updating member with memberCode = " + lastMemberCode + " id = " + profile._id);
    return SiriusMembers.update({
      memberCode: profile.memberCode
    }, {
      $set: profile
    }, function (err, res) {
      if (!err) {
        Meteor.call(SiriusMethod.ACTIVITY_INSERT, {
          activityType: ActivityType.UPDATE,
          userId: vm.userId,
          lastMemberCode: lastMemberCode,
          members: [profile]
        }, function (err, res) {
          if (err) {
            //Handle error here
          }
          if (res) {
            // handle result here
          }
        });
      }

      if (typeof callback === "function") {
        callback(err, res);
      }

    });
  },
  [SiriusMethod.MEMBER_ADD_PHOTO]: function (memberId, photoId, callback) {
    return SiriusMembers.update(memberId, {
      $push: {photos: photoId}
    }, function (err, res) {
      if (typeof callback === "function") {
        callback(err, res);
      }
    });
  }
});