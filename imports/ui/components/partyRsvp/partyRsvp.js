import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './partyRsvp.html';

class PartyRsvp {
    yes () {
        console.log("In the yes function");
        alert("YES");
        this.answer('yes');
    }
    
    maybe() {
        this.answer('maybe');
    }

    no() {
        this.answer('no');
    }

    answer(answer) {
        Meteor.call('rsvp', this.party._id, answer, (error) => {
            if (error) {
                console.error('Oops, unable to rsvp!');
            } else {
                console.log('RSVP done!');
            }
        });
    }
}

const name = 'partyRsvp';

// create module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        party: '<'
    },
    controller: ['$scope', PartyRsvp]
});