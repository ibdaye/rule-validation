import logger from '../utils/logger';

const getBio = (req, res) => {    
    const bioData = {
        "name": "Ibibo Seleye-Fubara",
        "github": "@ibdaye",
        "email": "ibibofubara@gmail.com",
        "mobile": "08132381817"
    };
    res.status(200).json({
        "message": "My Rule-Validation API",
        "status": "success",
        "data": bioData
    })
}

const validateRule = (req, res) => {

    const jsonData = req.body
    var field_condition = req.body.rule.condition
    var condition_value = req.body.rule.condition_value
    var mission_field = req.body.data.missions


    //COMPARISON LOGIC GOES HERE
    if (field_condition == 'gte'){
        var status = condition_value >= mission_field
        res.status(200).json({
            "message": "field mission successfully validated.",
            "status": "success",
            "data": {
                "validation": {
                "error": status,
                "field": "mission",
                "field_value": mission_field,
                "condition": field_condition,
                "condition_value": condition_value
                }
            }
        })
    }
    else if (field_condition == 'neq'){
        var status = condition_value != mission_field
        res.status(200).json({
            "message": "field mission successfully validated.",
            "status": "success",
            "data": {
                "validation": {
                "error": status,
                "field": "mission",
                "field_value": mission_field,
                "condition": field_condition,
                "condition_value": condition_value
                }
            }
        })

    }
     else if (field_condition == 'eq'){

        var status = condition_value == mission_field
        res.status(200).json({
            "message": "field mission successfully validated.",
            "status": "success",
            "data": {
                "validation": {
                "error": status,
                "field": "mission",
                "field_value": mission_field,
                "condition": field_condition,
                "condition_value": condition_value
                }
            }
        })

    }
     else if (field_condition == 'gt'){

            var status = condition_value > mission_field
            res.status(200).json({
                "message": "field mission successfully validated.",
                "status": "success",
                "data": {
                    "validation": {
                    "error": status,
                    "field": "mission",
                    "field_value": mission_field,
                    "condition": field_condition,
                    "condition_value": condition_value
                    }
                }
            })

     }
    // else if (){

    // }
    else res.status(200).json({
                "message": "field mission successfully validated.",
                "status": "success",
                "data": {
                    "validation": {
                    "error": status,
                    "field": "mission",
                    "field_value": mission_field,
                    "condition": field_condition,
                    "condition_value": condition_value
                    }
                }
            })





    // todo check for rule and data fields, (if else)
     
    // todo create validation logic (switch case)

    // todo Check field exist and supported data types (checks)

    // todo handle response and string formatting
    
    // res.status(200).json({
    //     // "message": "My Rule-Validation API",
    //     // "status": "success",
    //     "body": jsonData
    // })
}

export default {
    getBio,
    validateRule
}