/**
 * Wallet API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class GetBalanceResponse {
    'round': number;
    'effectiveUnlockedQty': string;
    'effectiveLockedQty': string;
    'totalHoldingFees': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "round",
            "baseName": "round",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "effectiveUnlockedQty",
            "baseName": "effective_unlocked_qty",
            "type": "string",
            "format": ""
        },
        {
            "name": "effectiveLockedQty",
            "baseName": "effective_locked_qty",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalHoldingFees",
            "baseName": "total_holding_fees",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetBalanceResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
