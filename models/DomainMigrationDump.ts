/**
 * Validator API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Dar } from '../models/Dar';
import { NodeIdentitiesDump } from '../models/NodeIdentitiesDump';
import { ParticipantUsersData } from '../models/ParticipantUsersData';
import { HttpFile } from '../http/http';

export class DomainMigrationDump {
    'participant': NodeIdentitiesDump;
    'participantUsers'?: ParticipantUsersData;
    /**
    * base64 encoded string of acs snapshot for the requested party id 
    */
    'acsSnapshot': string;
    'acsTimestamp': string;
    'dars': Array<Dar>;
    'migrationId': number;
    'domainId': string;
    'createdAt': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "participant",
            "baseName": "participant",
            "type": "NodeIdentitiesDump",
            "format": ""
        },
        {
            "name": "participantUsers",
            "baseName": "participant_users",
            "type": "ParticipantUsersData",
            "format": ""
        },
        {
            "name": "acsSnapshot",
            "baseName": "acs_snapshot",
            "type": "string",
            "format": ""
        },
        {
            "name": "acsTimestamp",
            "baseName": "acs_timestamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "dars",
            "baseName": "dars",
            "type": "Array<Dar>",
            "format": ""
        },
        {
            "name": "migrationId",
            "baseName": "migration_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "domainId",
            "baseName": "domain_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DomainMigrationDump.attributeTypeMap;
    }

    public constructor() {
    }
}
