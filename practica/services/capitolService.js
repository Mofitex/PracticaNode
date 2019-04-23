const constants = require('../config/constants');
const Capitol = require('../models/db/capitolModel');

const crudRepository = require('../database/crudRespository');

//const mongoose = require('mongoose');

module.exports.createCapitol = async (serviceData) => {
    const responseObj = constants.responseObj;
    try{
        /*const data = new Capitol({
            mail: serviceData.mail,
            name: serviceData.name,
            password: serviceData.password,
            phone: serviceData.phone // es igual l'ordre, no cal que estigui igual que capitolModel
        });*/
        const data = new Capitol(serviceData);
        //Call db command
        /*
        let responseFromDatabase = {
            status: constants.databaseStatus.ENTITY_CREATED,
            result: 'okay'
        };
        */
        const responseFromDatabase = await crudRepository.insertData(data);
        if (responseFromDatabase.status === constants.databaseStatus.ENTITY_CREATED) {
            responseObj.body = responseFromDatabase.result;
            responseObj.status = constants.serviceStatus.CAPITOL_CREATED_SUCCESSFULLY;
        }
    }catch(err) {
        console.log('ERROR-Service-createCapitol: ', err);
    }
    return responseObj;
}
