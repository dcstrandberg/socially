import { Meteor } from 'meteor/meteor'; 

import { Parties } from './collection.js';

if (Meteor.isServer) {
    Meteor.publish('parties', function() {
        const selector = {
            $or: [{
                //the public parties
                $and: [{
                    public: true
                }, {
                    public: {
                        $exists: true
                    }
                }]
            }, {
                // when logged in user is owner
                $and: [{
                    owner: this.userId
                }, {
                    // owner property has to exist AND be current user
                    owner: {
                        $exists: true
                    }
                }]
            }]
        };
        
        return Parties.find(selector);
    });
}