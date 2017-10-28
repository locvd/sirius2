/**
 * Created by locvd on 2017/10/25.
 */
Template.login.events({
  'submit form': function(event) {

    event.preventDefault();
    var emailVar = event.target.exampleInputEmail1.value;
    var passwordVar = event.target.exampleInputPassword1.value;
    Meteor.loginWithPassword(emailVar, passwordVar, function (err) {
      console.log(err);
      if (!err){
        history.back();
      }
    });

  }
});
