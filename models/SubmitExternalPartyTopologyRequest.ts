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

import { SignedTopologyTx } from '../models/SignedTopologyTx';
import { HttpFile } from '../http/http';

export class SubmitExternalPartyTopologyRequest {
    /**
    * hex-encoded ed25519 public key
    */
    'publicKey': string;
    'signedTopologyTxs': Array<SignedTopologyTx>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "publicKey",
            "baseName": "public_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "signedTopologyTxs",
            "baseName": "signed_topology_txs",
            "type": "Array<SignedTopologyTx>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubmitExternalPartyTopologyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
