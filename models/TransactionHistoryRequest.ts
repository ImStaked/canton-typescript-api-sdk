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

export class TransactionHistoryRequest {
    /**
    * Note that all transactions carry some monotonically-increasing event_id. Omit this page_end_event_id to start reading the first page, from the beginning or the end of the ledger, depending on the sort_order column. A subsequent request can fill the page_end_event_id with the last event_id of the TransactionHistoryResponse to continue reading in the same sort_order. The transaction with event_id == page_end_event_id will be skipped in the next response, making it possible to continuously read pages in the same sort_order. 
    */
    'pageEndEventId'?: string;
    /**
    * Sort order for the transactions. For ascending order, from beginning to the end of the ledger, use \"asc\". For descending order, from end to beginning of the ledger, use \"desc\". \"asc\" is used if the sort_order is omitted. 
    */
    'sortOrder'?: TransactionHistoryRequestSortOrderEnum;
    /**
    * The maximum number of transactions returned for this request. 
    */
    'pageSize': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pageEndEventId",
            "baseName": "page_end_event_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "sortOrder",
            "baseName": "sort_order",
            "type": "TransactionHistoryRequestSortOrderEnum",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "page_size",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return TransactionHistoryRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum TransactionHistoryRequestSortOrderEnum {
    Asc = 'asc',
    Desc = 'desc'
}

