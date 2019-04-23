const constants = require('../config/constants');
const Media = require('../models/db/mediaModel');

const crudRepository = require('../database/crudRespository');

//const mongoose = require('mongoose');

module.exports.createMedia = async (serviceData) => {
    const responseObj = constants.responseObj;
    try{
        /*const data = new Media({
            mail: serviceData.mail,
            name: serviceData.name,
            password: serviceData.password,
            phone: serviceData.phone // es igual l'ordre, no cal que estigui igual que mediaModel
        });*/
        const data = new Media(serviceData);
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
            responseObj.status = constants.serviceStatus.MEDIA_CREATED_SUCCESSFULLY;
        }
    }catch(err) {
        console.log('ERROR-Service-createMedia: ', err);
    }
    return responseObj;
}
