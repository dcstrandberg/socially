import angular from 'angular';

const name = 'uninvitedFilter';

function UninvitedFilter(users, party) {
    if (!party) {
        return false;
    }

    return users.filter((user) => {
        // if not the owner and not invited
        return user._id !== party.owner && !_.contains(party.invited, user._id);
    });
}

// create the module

export default angular.module(name, [])
 .filter(name, () => {
     return UninvitedFilter;
 });