var trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
}

if (Meteor.isClient) {
  Template.Login.events({
    'click .login__submit': function(event, template){
      event.preventDefault();
      // retrieve the input field values
      var email = template.find('.login__input.name').value;
      console.log(email);
      var password = template.find('.login__input.pass').value;
      console.log(password);
      // Trim and validate your fields here....
      trimInput(email);
      // If validation passes, supply the appropriate fields to the
      // Meteor.loginWithPassword() function.
      Meteor.loginWithPassword(email, password, function(err){
        if (err){
          console.log(err);
          console.log("Login Unsuccessful")
        }else{
          console.log("Login Successful")
        }
        // The user has been logged in.
      });
    },

    'click .login__signup': function(event, template){
      event.preventDefault();
      var email = template.find('.login__input.name').value;
      var password = template.find('.login__input.pass').value;
      trimInput(email);
      Accounts.createUser({
        email: email,
        password: password
      });
    }
  });
}
