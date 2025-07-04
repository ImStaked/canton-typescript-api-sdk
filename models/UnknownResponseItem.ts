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

import { TransactionSubtype } from '../models/TransactionSubtype';
import { HttpFile } from '../http/http';

export class UnknownResponseItem {
    'transactionType': string;
    'transactionSubtype': TransactionSubtype;
    'eventId': string;
    'date': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "transactionType",
            "baseName": "transaction_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionSubtype",
            "baseName": "transaction_subtype",
            "type": "TransactionSubtype",
            "format": ""
        },
        {
            "name": "eventId",
            "baseName": "event_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return UnknownResponseItem.attributeTypeMap;
    }

    public constructor() {
    }
}
