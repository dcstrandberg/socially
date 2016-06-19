import { Meteor } from 'meteor/meteor'; 
import { Counts } from 'meteor/tmeasday:publish-counts';

import { Parties } from './collection.js';

if (Meteor.isServer) {
    Meteor.publish('parties', function(options) {
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
        
        Counts.publish(this, 'numberOfParties', Parties.find(selector), {
            noReady: true
        });
        
        return Parties.find(selector, options);
    });
}