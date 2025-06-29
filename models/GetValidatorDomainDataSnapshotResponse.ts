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

import { DomainMigrationDump } from '../models/DomainMigrationDump';
import { HttpFile } from '../http/http';

export class GetValidatorDomainDataSnapshotResponse {
    'dataSnapshot': DomainMigrationDump;
    'migrationId': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dataSnapshot",
            "baseName": "data_snapshot",
            "type": "DomainMigrationDump",
            "format": ""
        },
        {
            "name": "migrationId",
            "baseName": "migration_id",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return GetValidatorDomainDataSnapshotResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
