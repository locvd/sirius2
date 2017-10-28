/**
 * Created by locvd on 2017/10/26.
 */
Template.register.events({
  'submit form': function(event) {

    event.preventDefault();
    var emailVar = event.target.signupInputEmail1.value;
    var passwordVar = event.target.signupInputPassword1.value;
    var passwordVarVerify = event.target.signupInputRePassword1.value;

    if (passwordVar !== passwordVarVerify) {
      console.log("Verified password incorrect");
    } else {
      console.log(emailVar);
      console.log(passwordVar);
      console.log('Register');
      Accounts.createUser({
        email: emailVar,
        password: passwordVar
      }, function (error) {
        console.log(error);
        if (!error){
          history.back();
        }
      });
    }
  }
});