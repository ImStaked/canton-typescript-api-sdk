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

import { ContractWithState } from '../models/ContractWithState';
import { HttpFile } from '../http/http';

export class ListExternalPartySetupProposalsResponse {
    'contracts': Array<ContractWithState>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contracts",
            "baseName": "contracts",
            "type": "Array<ContractWithState>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListExternalPartySetupProposalsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
