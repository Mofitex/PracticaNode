const constants = require('../config/constants');
const Capitol = require('../models/db/capitolModel');
const crudRepository = require('../database/crudRespository');
const mongoose = require('mongoose');

module.exports.createConnection = async () => {
    try{
        const responseFromDatabase = await crudRepository.createConnection();
        console.log("responseObj", responseFromDatabase);
    }catch(err) {
        console.log('ERROR-Service-createConnection: ', err);
    }
};

module.exports.createCapitol = async (serviceData) => {
    const responseObj = constants.responseObj;
    try{
        /*const data = new Capitol({
            mail: serviceData.mail,
            name: serviceData.name,
            password: serviceData.password,
            phone: serviceData.phone // es igual l'ordre, no cal que estigui igual que capitolModel
        });*/
        const data = {
            model: new Capitol(serviceData)
        };
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

module.exports.getCapitolList = async (serviceData) => {
    const responseObj = constants.responseObj;
    try{
        const data = {
            query: {},
            model: Capitol,
            projection: {
                '__v': false,
                'password': false
            }
        };
        if(serviceData.skip && serviceData.limit) {
            data.skip = parseInt(serviceData.skip);
            data.limit = parseInt(serviceData.limit);
        }
        /*const responseFromDatabase = {
            status: constants.databaseStatus.ENTITY_FETCHED
        };*/
        const responseFromDatabase = await crudRepository.find(data);
        if (responseFromDatabase.status === constants.databaseStatus.ENTITY_FETCHED) {
            responseObj.body = responseFromDatabase.result;
            responseObj.status = constants.serviceStatus.CAPITOL_LIST_FETCHED_SUCCESSFULLY;
        }

    }catch(err) {
        console.log('ERROR-Service-getCapitolList: ', err);
    }
    return responseObj;
}

module.exports.getCapitolDetails = async (serviceData) => {
    const responseObj = constants.responseObj;
    try{
        const data = {
            query: {
                _id: mongoose.Types.ObjectId(serviceData.capitolId)
            },
            model: Capitol,
            projection: {}
        };
        /*const responseFromDatabase = {
            status: constants.databaseStatus.ENTITY_FETCHED
        };*/
        const responseFromDatabase = await crudRepository.find(data);
        if (responseFromDatabase.status === constants.databaseStatus.ENTITY_FETCHED) {
            responseObj.body = responseFromDatabase.result;
            responseObj.status = constants.serviceStatus.CAPITOL_FETCHED_SUCCESSFULLY;
        }
    }catch(err) {
        console.log('ERROR-Service-getCapitolDetails: ', err);
    }
    return responseObj;
}
