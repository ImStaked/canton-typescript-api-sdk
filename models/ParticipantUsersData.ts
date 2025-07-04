/**
 * Common schemas for Splice API definitions
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ParticipantIdentityProvider } from '../models/ParticipantIdentityProvider';
import { ParticipantUser } from '../models/ParticipantUser';
import { HttpFile } from '../http/http';

export class ParticipantUsersData {
    'identityProviders': Array<ParticipantIdentityProvider>;
    'users': Array<ParticipantUser>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "identityProviders",
            "baseName": "identityProviders",
            "type": "Array<ParticipantIdentityProvider>",
            "format": ""
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<ParticipantUser>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ParticipantUsersData.attributeTypeMap;
    }

    public constructor() {
    }
}
