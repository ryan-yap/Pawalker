var trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
}

if (Meteor.isClient) {
  Template.login.events({
    'submit #login-form' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var email = t.find('#login-email').value
      , password = t.find('#login-password').value;

        // Trim and validate your fields here.... 
        trimInput(email);
        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
          if (err){
            console.log("User's logged in")
          }else{
            console.log("Login Unsuccessful")
          }
          // The user has been logged in.
      });
        return false; 
      }
    });

  Template.register.events({
    'submit #register-form' : function(e, t) {
      e.preventDefault();
      var email = t.find('#account-email').value
        , password = t.find('#account-password').value;

        // Trim and validate the input
      trimInput(email);
      Accounts.createUser({email: email, password : password}, function(err){
          if (err) {
            // Inform the user that account creation failed
          } else {
            // Success. Account has been created and the user
            // has logged in successfully. 
          }

        });

      return false;
    }
  });

}
