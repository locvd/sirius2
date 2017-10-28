/**
 * Created by locvd on 2017/10/26.
 */
Template.signout.helpers({
  userEmail: function () {
    return Meteor.user().emails[0].address;
  }
});

Template.signout.events({
  'click #signOutButton': function (event) {
    event.preventDefault();
    Meteor.logout();
  }
});