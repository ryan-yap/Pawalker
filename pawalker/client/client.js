/**
 * Created by KangShiang on 16-02-13.
 */

var trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
}

/**
 * Created by KangShiang on 16-02-13.
 */
// when you navigate to "/one" automatically render the template named "One".
Router.route('/');

Router.route('/login', function () {
    this.render('login');
});

Router.route('/signup', function () {
    this.render('signup');
});

Template.login.events({
    'click .login__submit': function (event, template) {
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
        Meteor.loginWithPassword(email, password, function (err) {
            if (!err) {
                console.log("User's logged in")

            } else {
                console.log(err)
                console.log("Login Unsuccessful")
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
        Accounts.createUser({
            email: email,
            password: password
        });
    }
});

