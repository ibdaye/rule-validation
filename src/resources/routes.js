import Helper from '../controllers/routeController';
import validate from 'express-validation';
import {
	validationRouteRules
} from '../validations';

module.exports = app => {
	app.route('/').get(Helper.getBio); 
	app.route('/rule-validation').post(validate(validationRouteRules), Helper.validateRule);
};
