/**
 * Created by KangShiang on 16-02-13.
 */

var trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
}

Router.route('/', function () {
   this.render('login');
});

Router.route('/signup', function () {
    this.render('signup');
});

Router.route('/home', function () {
    this.render('home');
});

Template.login.events({
    'click .login__submit': function (event, template) {
        event.preventDefault();
        // retrieve the input field values
        var email = template.find('.login__input.name').value;
        var password = template.find('.login__input.pass').value;
        // Trim and validate your fields here....
        trimInput(email);
        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword({email:email}, password, function (err) {
            if (!err) {
                Router.go("home");
            } else {
                console.log(err.reason);
                console.log("Login Unsuccessful");
            }
        });
    }
});

Template.signup.events({
    'click .login__submit': function (event, template) {
        event.preventDefault();
        var email = template.find('.login__input.name').value;
        var password = template.find('.login__input.pass').value;
        trimInput(email);
        Accounts.createUser({email: email, password: password}, function(err) {
            if (!err) {
                Router.go("home");
            } else {
                console.log(err.reason);
            }
        });
        Meteor.call("userReg", email, password);
    }
});

