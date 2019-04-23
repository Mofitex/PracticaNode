module.exports = {
    responseObj: {
        status: 500,
        message: 'Internal server error',
        body: {}
    },
    databaseStatus: {
        ENTITY_CREATED: 'Entity Created',
        DATABASE_CONNECTED: 'Database connected successfully',
        DATABASE_ERROR: 'Database error'
    },
    controllerStatus: {
        BAD_REQUEST: 'Required fields missing'
    },
    serviceStatus: {
        USER_CREATED_SUCCESSFULLY: 'User created successfully',
        MEDIA_CREATED_SUCCESSFULLY: 'Media created successfully',
        CAPITOL_CREATED_SUCCESSFULLY: 'Capitol created successfully'
    }
}
