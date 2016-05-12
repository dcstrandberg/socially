import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './partiesForm.html';

class PartiesForm {
    constructor($scope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
    }

    add(newName, newDescription) {
        Parties.insert({
            'name': newName,
            'description': newDescription
        });
        this.partyName = "";
        this.partyDesc = "";
    };
}

const name = 'partiesForm';

export default angular.module(name, [
    angularMeteor
])
.component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: PartiesForm
});