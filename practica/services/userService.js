const constants = require('../config/constants');
const User = require('../models/db/userModel');

const crudRepository = require('../database/crudRespository');

//const mongoose = require('mongoose');

module.exports.createUser = async (serviceData) => {
    const responseObj = constants.responseObj;
    try{
        /*const data = new User({
            mail: serviceData.mail,
            name: serviceData.name,
            password: serviceData.password,
            phone: serviceData.phone // es igual l'ordre, no cal que estigui igual que userModel
        });*/
        const data = new User(serviceData);
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
            responseObj.status = constants.serviceStatus.USER_CREATED_SUCCESSFULLY;
        }
    }catch(err) {
        console.log('ERROR-Service-createUser: ', err);
    }
    return responseObj;
}