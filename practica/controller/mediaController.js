const constants = require('../config/constants');
const mediaService = require('../services/mediaService');

module.exports.createMedia = async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = req.body;
        console.log("req.body: ", req.body);
        // call the service with this data
        /*let responseFromService = {
            status: constants.serviceStatus.MEDIA_CREATED_SUCCESSFULLY,
            message: 'okay',
            body: 'body'
        };*/
        const responseFromService = await mediaService.createMedia(data);
        if (responseFromService.status === constants.serviceStatus.MEDIA_CREATED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.MEDIA_CREATED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-createMedia: ', err);
    }
    return res.status(responseObj.status).send(responseObj);
}
