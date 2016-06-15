import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './partiesForm.html';
import { Parties } from '../../../api/parties';

class PartiesForm {
    constructor($scope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
    }

    add() {
        this.party.owner = Meteor.user()._id;
        Parties.insert(this.party);
        this.party.name = "";
        this.party.description = "";
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