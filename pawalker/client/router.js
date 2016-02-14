/**
 * Created by Daniel on 14/02/2016.
 */

Router.route('/', function () {
    if (Meteor.userId()) {
        Router.go("home");
    } else {
        this.render('login');
    }
});

Router.route('/signup', function () {
    this.render('signup');
});

Router.route('/home', function(){
    if (Meteor.userId()) {
        this.render('home');
        GoogleMaps.load();
    } else {
        Router.go("/");
    }
});
