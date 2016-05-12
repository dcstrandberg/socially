import angular from 'angular';
import angularMeteor from 'angular-meteor';

var app = angular.module('socially', [
    angularMeteor
]);
app.component('partiesList', {
    templateUrl: 'client/partiesList.html',
    controllerAs: 'partiesListCtrl',
    controller($scope, $reactive) {
    
        'ngInject';
    
        $reactive(this).attach($scope);
    
        this.helpers({
            parties() {
                return Parties.find({});
            }        
        });
    }    
});
app.component('partiesForm', {
    templateUrl: 'client/partiesForm.html',
    controllerAs: 'pForm',
    controller($scope, $reactive) {
    
    'ngInject';
    $reactive(this).attach($scope);
    
    this.add = function(newName, newDescription) {
            Parties.insert({
                'name': newName,
                'description': newDescription
            });
            this.partyName = "";
            this.partyDesc = "";
        };
    }        
});