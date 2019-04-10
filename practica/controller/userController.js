const constants = require('../config/constants');
const userService = require('../services/userService');

module.exports.createUser = async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = req.body;
        console.log("req.body: ", req.body);
        // call the service with this data
        /*let responseFromService = { 
            status: constants.serviceStatus.USER_CREATED_SUCCESSFULLY, 
            message: 'okay', 
            body: 'body'
        };*/
        const responseFromService = await userService.createUser(data);
        if (responseFromService.status === constants.serviceStatus.USER_CREATED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.USER_CREATED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-createUser: ', err);
    }
    return res.status(responseObj.status).send(responseObj);
}