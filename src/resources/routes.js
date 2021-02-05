import Helper from '../controllers/routeController';
// import validate from 'express-validation';
// import {
// 	validationRouteRules
// } from '../validations';

module.exports = app => {
	app.route('/').get(Helper.getBio); 
	app.route('/validate-rule').post(Helper.validateRule);
};
