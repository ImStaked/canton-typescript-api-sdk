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

export class UserStatusResponse {
    'partyId': string;
    'userOnboarded': boolean;
    'userWalletInstalled': boolean;
    'hasFeaturedAppRight': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "partyId",
            "baseName": "party_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userOnboarded",
            "baseName": "user_onboarded",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "userWalletInstalled",
            "baseName": "user_wallet_installed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasFeaturedAppRight",
            "baseName": "has_featured_app_right",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserStatusResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
