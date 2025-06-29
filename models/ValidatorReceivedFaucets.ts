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

import { HttpFile } from '../http/http';

export class ValidatorReceivedFaucets {
    /**
    * The party ID of the onboarded validator
    */
    'validator': string;
    /**
    * how many rounds the validator has received a faucet for; guaranteed that collected + missed = last - first + 1 
    */
    'numRoundsCollected': number;
    /**
    * how many rounds between firstCollected and lastCollected in which the validator failed to collect (i.e. was not active or available); can at most be max(0, lastCollected - firstCollected - 1). 
    */
    'numRoundsMissed': number;
    /**
    * the round number when this validator started collecting faucets; the validator definitely recorded liveness in this round 
    */
    'firstCollectedInRound': number;
    /**
    * The most recent round number in which the validator collected a faucet; the validator definitely recorded liveness in this round.  Will equal `firstCollected` if the validator has collected in only one round 
    */
    'lastCollectedInRound': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "validator",
            "baseName": "validator",
            "type": "string",
            "format": ""
        },
        {
            "name": "numRoundsCollected",
            "baseName": "numRoundsCollected",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numRoundsMissed",
            "baseName": "numRoundsMissed",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "firstCollectedInRound",
            "baseName": "firstCollectedInRound",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "lastCollectedInRound",
            "baseName": "lastCollectedInRound",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return ValidatorReceivedFaucets.attributeTypeMap;
    }

    public constructor() {
    }
}
