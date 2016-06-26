import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import template from './partiesList.html';

import { Counts } from 'meteor/tmeasday:publish-counts';
import { Parties } from '../../../api/parties/index';
import { name as PartyRemove } from '../partyRemove/partyRemove';
import { name as PartiesSort } from '../partiesSort/partiesSort';
import { name as PartyCreator } from '../partyCreator/partyCreator';
import { name as PartyRsvp } from '../partyRsvp/partyRsvp';
import { name as PartyRsvpsList } from '../partyRsvpsList/partyRsvpsList';
import { name as PartyUnanswered } from '../partyUnanswered/partyUnanswered';

class PartiesList {
    constructor($scope, $reactive) {
        'ngInject';
        
        var vm = $reactive(this).attach($scope);
        
        this.perPage = 3;
        this.page = 1;
        this.sort = {
            name: 1
        };
        this.searchText = '';
        
        this.subscribe('parties', () => [{
            limit: parseInt(this.perPage),
            skip: parseInt((this.getReactively('page') - 1) * this.perPage),
            sort: this.getReactively('sort')
        }, this.getReactively('searchText')
        ]);
        
        this.subscribe('users');
        
        vm.helpers({
            parties() {
                return Parties.find({}, {
                    sort: this.getReactively('sort')
                });
            }, 
            partiesCount() {
                return Counts.get('numberOfParties');
            }
        });
    }//End of Constructor
    
    pageChanged(newPage) {
        this.page = newPage;
    }
    
    sortChanged(sort) {
        this.sort = sort;
    }
}//End of Class

const name = 'partiesList';

//Create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,  
    utilsPagination,  
    PartyRemove,
    PartiesSort,
    PartyCreator,
    PartyRsvp,
    PartyRsvpsList,
    PartyUnanswered
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
