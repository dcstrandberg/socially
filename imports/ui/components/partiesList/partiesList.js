import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './partiesList.html';

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
    angularMeteor
]).component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: PartiesList
});