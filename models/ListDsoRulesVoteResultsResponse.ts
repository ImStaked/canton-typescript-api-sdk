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

import { HttpFile } from '../http/http';

export class ListDsoRulesVoteResultsResponse {
    'dsoRulesVoteResults': Array<any>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dsoRulesVoteResults",
            "baseName": "dso_rules_vote_results",
            "type": "Array<any>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListDsoRulesVoteResultsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
