import { name as PartiesForm } from '../partiesForm';
import { Parties } from '../../../../api/parties';
import 'angular-mocks';

describe('PartiesForm', () => {
    beforeEach(() => {
        window.module(PartiesForm);
    });
    
    describe('controller', () => {
        let controller;
        const party = {
            name: 'Foo',
            description: 'Birthday of Foo'
        };
        
        beforeEach(() => {
            inject(($rootScope, $componentController) => {
                controller = $componentController(PartiesForm, {
                    $scope: $rootScope.$new(true)
                });
            });
        });
        
        describe('add()', () => {
            beforeEach(() => {
                spyOn(Parties, 'insert');
                
                controller.add(party.name, party.description);
            });
            
            it('should insert a new party', () => {
                expect(Parties.insert).toHaveBeenCalledWith(party);
            });
        });
    });
});