import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './partiesList.html';

import { Parties } from '../../../api/parties';
import { name as PartyRemove } from '../partyRemove/partyRemove';

class PartiesList {
    constructor($scope, $reactive) {
        'ngInject';
        
        var vm = $reactive(this).attach($scope);
        
        vm.helpers({
            parties() {
                return Parties.find({});
            }
        });
    }
}

const name = 'partiesList';

//Create a module
export default angular.module(name, [
    angularMeteor,
    PartyRemove
]).component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: PartiesList
});