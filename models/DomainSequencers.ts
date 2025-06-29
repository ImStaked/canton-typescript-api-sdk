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

import { DsoSequencer } from '../models/DsoSequencer';
import { HttpFile } from '../http/http';

export class DomainSequencers {
    /**
    * the synchronizer ID for the associated sequencers
    */
    'domainId': string;
    /**
    * the sequencers associated with the synchronizer
    */
    'sequencers': Array<DsoSequencer>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "domainId",
            "baseName": "domainId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sequencers",
            "baseName": "sequencers",
            "type": "Array<DsoSequencer>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DomainSequencers.attributeTypeMap;
    }

    public constructor() {
    }
}
