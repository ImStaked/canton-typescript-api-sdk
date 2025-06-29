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

import { HoldingsSummary } from '../models/HoldingsSummary';
import { HttpFile } from '../http/http';

export class HoldingsSummaryResponse {
    /**
    * The same `record_time` as in the request.
    */
    'recordTime': Date;
    /**
    * The same `migration_id` as in the request.
    */
    'migrationId': number;
    /**
    * The same `as_of_round` as in the request, with the same default.
    */
    'computedAsOfRound': number;
    'summaries': Array<HoldingsSummary>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordTime",
            "baseName": "record_time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "migrationId",
            "baseName": "migration_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "computedAsOfRound",
            "baseName": "computed_as_of_round",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "summaries",
            "baseName": "summaries",
            "type": "Array<HoldingsSummary>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HoldingsSummaryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
