/**
 * Validators for every endpoint that accepts input (in form of request params or body).
 * Ensures the correctness of the format of the data that is being stored and processed.
 */

const Joi = require('joi');

export const validationRouteRules = {
    body: {
        rule: Joi.object().required().error(() => {
            return JSON.stringify({
                message: 'rule is required.',
                status: "error",
                data: null
            });
        }),

        data: Joi.any().required().error(() => {
            return JSON.stringify({
                message: 'data is required.',
                status: "error",
                data: null
            });
        }),

    }
};
