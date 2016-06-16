import { Meteor } from 'meteor/meteor';
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
            description: 'Birthday of Foo', 
            public: true
        };
        const user = {
            _id: 'userId'
        };
        
        beforeEach(() => {
            inject(($rootScope, $componentController) => {
                controller = $componentController(PartiesForm, {
                    $scope: $rootScope.$new(true)
                });
            });
            
            spyOn(Meteor, 'user').and.returnValue(user);
        });
        
        describe('add()', () => {
            beforeEach(() => {
                spyOn(Parties, 'insert');
                
                controller.party = party;
                
                controller.add();
            });
            
            it('should insert a new party', () => {
                expect(Parties.insert).toHaveBeenCalledWith({
                    name: party.name,
                    description: party.description,
                    public: party.public,
                    owner: user._id                    
                });
            });
        });
    });
});