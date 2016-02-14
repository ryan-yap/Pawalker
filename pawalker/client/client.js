/**
 * Created by KangShiang on 16-02-13.
 */

Template.home.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(49.246292, -123.116226),
                zoom: 12
            };
        }
    }
});

Template.home.onCreated(function() {
    GoogleMaps.ready('home', function(map) {
        console.log("I'm ready!");
    });
});

Template.home.events({
    'click .logout': function (event) {
        console.log("Logout");
        event.preventDefault();
        Meteor.logout();
        Router.go("/");
    }
});
