/**
 * Created by locvd on 2017/10/28.
 */
import {Meteor} from 'meteor/meteor';
import publish from './publish.js'

Meteor.startup(() => {
  // code to run on server at startup
  // console.log(Meteor.settings.public.ga.account)
  publish();
});