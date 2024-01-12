/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserClient {

    /**
     * @returns User Create a user
     * @throws ApiError
     */
    public static create(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/user',
        });
    }

    /**
     * @param id
     * @returns User Get a user by id
     * @throws ApiError
     */
    public static getById(
        id: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/user/{id}',
            path: {
                'id': id,
            },
        });
    }

}
