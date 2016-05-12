import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './socially.html';
import { name as PartiesList } from '../partiesList/partiesList';
import { name as PartiesForm } from '../partiesForm/partiesForm';

class Socially {}

const name = 'socially';

//Create a module
export default angular.module(name, [
    angularMeteor,
    PartiesList,
    PartiesForm
]).component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: Socially
});