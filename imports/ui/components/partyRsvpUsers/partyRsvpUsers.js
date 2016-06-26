import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './partyRsvpUsers.html';
import { name as DisplayNameFilter } from '../../filters/displayNameFilter';

class PartyRsvpUsers {
/*    constructor($scope) {
        'ngInject';
        $scope.viewModel(this);

        this.subscribe('users');
    }*/

    getUserById(userId) {
        return Meteor.users.findOne(userId);
    }
}

const name = 'partyRsvpUsers';

// create module
export default angular.module(name, [
    angularMeteor,
    DisplayNameFilter
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        rsvps: '<',
        type: '@'
    },
    controller: PartyRsvpUsers
});