import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './partiesForm.html';
import { Parties } from '../../../api/parties/index';

class PartiesForm {
    constructor($scope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
        
        this.party = {};
    }

    add() {
        this.party.owner = Meteor.user()._id;
        Parties.insert(this.party);
        this.party = {};
    };
}

const name = 'partiesForm';

export default angular.module(name, [
    angularMeteor
])
.component(name, {
    template,
    controllerAs: name,
    controller: PartiesForm
});