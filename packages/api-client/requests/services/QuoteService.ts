/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Quote } from '../models/Quote';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuoteService {

    /**
     * Create a quote
     * Create a quote
     * @returns Quote Create a quote
     * @throws ApiError
     */
    public static create(): CancelablePromise<Quote> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/quote',
        });
    }

    /**
     * Purchase a quote
     * Purchase a quote
     * @param id
     * @returns string Purchase a quote
     * @throws ApiError
     */
    public static purchase(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/quote/{id}/purchase',
            path: {
                'id': id,
            },
        });
    }

}
