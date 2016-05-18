//This is saved outside of the /client or /server directories
//Because we want this to run on both client and server
//And normally AngularJS files are loaded only on the client side
import { Mongo } from 'meteor/mongo';

export const Parties = new Mongo.Collection('parties');