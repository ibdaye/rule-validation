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
    
    //COMPARISON LOGIC GOES HERE
    
    res.status(200).json({
        // "message": "My Rule-Validation API",
        // "status": "success",
        "body": jsonData
    })
}

export default {
    getBio,
    validateRule
}