/**
 * Scan API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ValidatorPurchasedTraffic } from '../models/ValidatorPurchasedTraffic';
import { HttpFile } from '../http/http';

export class GetTopValidatorsByPurchasedTrafficResponse {
    'validatorsByPurchasedTraffic': Array<ValidatorPurchasedTraffic>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "validatorsByPurchasedTraffic",
            "baseName": "validatorsByPurchasedTraffic",
            "type": "Array<ValidatorPurchasedTraffic>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetTopValidatorsByPurchasedTrafficResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
