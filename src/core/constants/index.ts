export const SEQUELIZE = 'SEQUELIZE';
export const DEVELOPMENT = 'development';
export const TEST = 'test';
export const PRODUCTION = 'production';
export const USER_REPOSITORY = 'USER_REPOSITORY';
export const POST_REPOSITORY = 'POST_REPOSITORY';
export const STATUS_MSG = {
    ERROR: {
        BAD_REQUEST(message: string) {
            return {
                statusCode: 400,
                success: false,
                message,
                type: 'BAD_REQUEST',
            };
        },

        ERROR_OCCURED: {
            statusCode: 400,
            success: false,
            message: 'error occured',
        },

        UNAUTHORIZED: {
            statusCode: 401,
            success: false,
            message: 'You are not authorized to perform this action',
            type: 'UNAUTHORIZED',
        },
    },

    SUCCESS: {
        statusCode: 200,
        success: true,
        message: 'Success',
    },

    SUCCESS_WITH_MESSAGE(message: string) {
        return {
            statusCode: 200,
            success: true,
            message,
            type: 'Success',
        };
    },

    //   CREATED: (message: any) => {
    //     return {
    //       statusCode: 201,
    //       success: true,
    //       message: 'Created Successfully',
    //       data: message,
    //       type: 'CREATED',
    //     };
    //   },
};
export const HttpStatusCodes = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
};
