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

import { HttpFile } from '../http/http';

export class TransferOfferFailedResponse {
    /**
    * The status of the transfer offer. created:   The offer has been created and is waiting for the receiver to accept it.   contract_id points to the contract_id of the offer and transaction_id to the transaction that created it. accepted:   The offer has been accepted by the receiver and is waiting for the wallet automation   to complete it by delivering the offered Amulet.   contract_id points to the contract id of the accepted offer and transaction_id to the transaction that accepted it completed:   The transfer has been completed and the CC amount has been transferred to the receiver.   contract_id points to the contract id of the created amulet for the receiver and   transaction_id to the transaction of the transfer. failed:   The transfer has failed permanently and no CC has been transferred. Refer to   failure_reason for details. A new transfer offer can be created with a different tracking_id. 
    */
    'status': string;
    /**
    * The reason for the failure of the transfer offer. expired:   The transfer offer or the accepted transfer offer expired before it could be completed. rejected:   The receiver rejected the transfer offer or withdrew their accepted offer. withdrawn:   The sender withdraw their offer, e.g., due to insufficient funds or operational reasons. 
    */
    'failureKind': TransferOfferFailedResponseFailureKindEnum;
    /**
    * Human readable description of the reason for the sender withdrawing their offer. 
    */
    'withdrawnReason'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "failureKind",
            "baseName": "failure_kind",
            "type": "TransferOfferFailedResponseFailureKindEnum",
            "format": ""
        },
        {
            "name": "withdrawnReason",
            "baseName": "withdrawn_reason",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransferOfferFailedResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum TransferOfferFailedResponseFailureKindEnum {
    Expired = 'expired',
    Rejected = 'rejected',
    Withdrawn = 'withdrawn'
}

