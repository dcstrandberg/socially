import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './partiesList.html';

import { Parties } from '../../../api/parties/index';
import { name as PartyRemove } from '../partyRemove/partyRemove';

class PartiesList {
    constructor($scope, $reactive) {
        'ngInject';
        
        var vm = $reactive(this).attach($scope);
        
        this.subscribe('parties');
        
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
    uiRouter,    
    PartyRemove
]).component(name, {
    template,
    controllerAs: name,
    controller: PartiesList
})
.config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('parties', {
            url: '/parties',
            template: '<parties-form></parties-form><br/><parties-list></parties-list>'
        });
}
