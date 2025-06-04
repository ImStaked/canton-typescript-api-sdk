// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BatchListVotesByVoteRequestsRequest } from '../models/BatchListVotesByVoteRequestsRequest';
import { ErrorResponse } from '../models/ErrorResponse';
import { FeatureSupportResponse } from '../models/FeatureSupportResponse';
import { GetAmuletRulesRequest } from '../models/GetAmuletRulesRequest';
import { GetAmuletRulesResponse } from '../models/GetAmuletRulesResponse';
import { GetAnsRulesRequest } from '../models/GetAnsRulesRequest';
import { GetAnsRulesResponse } from '../models/GetAnsRulesResponse';
import { GetBackfillingStatusResponse } from '../models/GetBackfillingStatusResponse';
import { GetExternalPartyAmuletRulesRequest } from '../models/GetExternalPartyAmuletRulesRequest';
import { GetExternalPartyAmuletRulesResponse } from '../models/GetExternalPartyAmuletRulesResponse';
import { GetMigrationInfoRequest } from '../models/GetMigrationInfoRequest';
import { GetMigrationInfoResponse } from '../models/GetMigrationInfoResponse';
import { GetSpliceInstanceNamesResponse } from '../models/GetSpliceInstanceNamesResponse';
import { GetTopValidatorsByValidatorFaucetsResponse } from '../models/GetTopValidatorsByValidatorFaucetsResponse';
import { GetUpdatesBeforeRequest } from '../models/GetUpdatesBeforeRequest';
import { GetUpdatesBeforeResponse } from '../models/GetUpdatesBeforeResponse';
import { ListAmuletPriceVotesResponse } from '../models/ListAmuletPriceVotesResponse';
import { ListDsoRulesVoteRequestsResponse } from '../models/ListDsoRulesVoteRequestsResponse';
import { ListDsoRulesVoteResultsResponse } from '../models/ListDsoRulesVoteResultsResponse';
import { ListFeaturedAppRightsResponse } from '../models/ListFeaturedAppRightsResponse';
import { ListSvBftSequencersResponse } from '../models/ListSvBftSequencersResponse';
import { ListVoteRequestByTrackingCidResponse } from '../models/ListVoteRequestByTrackingCidResponse';
import { ListVoteResultsRequest } from '../models/ListVoteResultsRequest';
import { LookupDsoRulesVoteRequestResponse } from '../models/LookupDsoRulesVoteRequestResponse';
import { LookupFeaturedAppRightResponse } from '../models/LookupFeaturedAppRightResponse';
import { LookupTransferCommandCounterByPartyResponse } from '../models/LookupTransferCommandCounterByPartyResponse';
import { LookupTransferCommandStatusResponse } from '../models/LookupTransferCommandStatusResponse';
import { LookupTransferPreapprovalByPartyResponse } from '../models/LookupTransferPreapprovalByPartyResponse';
import { MigrationSchedule } from '../models/MigrationSchedule';
import { SynchronizerBootstrappingTransactions } from '../models/SynchronizerBootstrappingTransactions';
import { SynchronizerIdentities } from '../models/SynchronizerIdentities';

/**
 * no description
 */
export class InternalApiRequestFactory extends BaseAPIRequestFactory {

    /**
     */
    public async featureSupport(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/feature-support';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param getAmuletRulesRequest 
     */
    public async getAmuletRules(getAmuletRulesRequest: GetAmuletRulesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getAmuletRulesRequest' is not null or undefined
        if (getAmuletRulesRequest === null || getAmuletRulesRequest === undefined) {
            throw new RequiredError("InternalApi", "getAmuletRules", "getAmuletRulesRequest");
        }


        // Path Params
        const localVarPath = '/v0/amulet-rules';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getAmuletRulesRequest, "GetAmuletRulesRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param getAnsRulesRequest 
     */
    public async getAnsRules(getAnsRulesRequest: GetAnsRulesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getAnsRulesRequest' is not null or undefined
        if (getAnsRulesRequest === null || getAnsRulesRequest === undefined) {
            throw new RequiredError("InternalApi", "getAnsRules", "getAnsRulesRequest");
        }


        // Path Params
        const localVarPath = '/v0/ans-rules';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getAnsRulesRequest, "GetAnsRulesRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve the status of the backfilling process. 
     */
    public async getBackfillingStatus(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/backfilling/status';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param getExternalPartyAmuletRulesRequest 
     */
    public async getExternalPartyAmuletRules(getExternalPartyAmuletRulesRequest: GetExternalPartyAmuletRulesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getExternalPartyAmuletRulesRequest' is not null or undefined
        if (getExternalPartyAmuletRulesRequest === null || getExternalPartyAmuletRulesRequest === undefined) {
            throw new RequiredError("InternalApi", "getExternalPartyAmuletRules", "getExternalPartyAmuletRulesRequest");
        }


        // Path Params
        const localVarPath = '/v0/external-party-amulet-rules';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getExternalPartyAmuletRulesRequest, "GetExternalPartyAmuletRulesRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List all previous synchronizer migrations in this Splice network\'s history. 
     * @param getMigrationInfoRequest 
     */
    public async getMigrationInfo(getMigrationInfoRequest: GetMigrationInfoRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getMigrationInfoRequest' is not null or undefined
        if (getMigrationInfoRequest === null || getMigrationInfoRequest === undefined) {
            throw new RequiredError("InternalApi", "getMigrationInfo", "getMigrationInfoRequest");
        }


        // Path Params
        const localVarPath = '/v0/backfilling/migration-info';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getMigrationInfoRequest, "GetMigrationInfoRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * If the DSO has scheduled a synchronizer upgrade, return its planned time and the new migration ID. 
     */
    public async getMigrationSchedule(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/migrations/schedule';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve the UI names of various elements of this Splice network.
     */
    public async getSpliceInstanceNames(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/splice-instance-names';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param domainIdPrefix 
     */
    public async getSynchronizerBootstrappingTransactions(domainIdPrefix: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'domainIdPrefix' is not null or undefined
        if (domainIdPrefix === null || domainIdPrefix === undefined) {
            throw new RequiredError("InternalApi", "getSynchronizerBootstrappingTransactions", "domainIdPrefix");
        }


        // Path Params
        const localVarPath = '/v0/synchronizer-bootstrapping-transactions/{domain_id_prefix}'
            .replace('{' + 'domain_id_prefix' + '}', encodeURIComponent(String(domainIdPrefix)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param domainIdPrefix 
     */
    public async getSynchronizerIdentities(domainIdPrefix: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'domainIdPrefix' is not null or undefined
        if (domainIdPrefix === null || domainIdPrefix === undefined) {
            throw new RequiredError("InternalApi", "getSynchronizerIdentities", "domainIdPrefix");
        }


        // Path Params
        const localVarPath = '/v0/synchronizer-identities/{domain_id_prefix}'
            .replace('{' + 'domain_id_prefix' + '}', encodeURIComponent(String(domainIdPrefix)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of top validators by number of rounds in which they collected faucets, and basis statistics on their round collection history 
     * @param limit Maximum number of validator records that may be returned in the response 
     */
    public async getTopValidatorsByValidatorFaucets(limit: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new RequiredError("InternalApi", "getTopValidatorsByValidatorFaucets", "limit");
        }


        // Path Params
        const localVarPath = '/v0/top-validators-by-validator-faucets';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve transactions and synchronizer reassignments prior to the request\'s specification. 
     * @param getUpdatesBeforeRequest 
     */
    public async getUpdatesBefore(getUpdatesBeforeRequest: GetUpdatesBeforeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getUpdatesBeforeRequest' is not null or undefined
        if (getUpdatesBeforeRequest === null || getUpdatesBeforeRequest === undefined) {
            throw new RequiredError("InternalApi", "getUpdatesBefore", "getUpdatesBeforeRequest");
        }


        // Path Params
        const localVarPath = '/v0/backfilling/updates-before';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getUpdatesBeforeRequest, "GetUpdatesBeforeRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve a list of the latest amulet price votes
     */
    public async listAmuletPriceVotes(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/amulet-price/votes';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List all active `VoteRequest`\\ s.
     */
    public async listDsoRulesVoteRequests(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/admin/sv/voterequests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List every `FeaturedAppRight` registered with the DSO on the ledger. 
     */
    public async listFeaturedAppRights(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/featured-apps';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve Canton BFT sequencer configuration for this SV, for each configured Synchronizer 
     */
    public async listSvBftSequencers(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/sv-bft-sequencers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param listVoteResultsRequest 
     */
    public async listVoteRequestResults(listVoteResultsRequest: ListVoteResultsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listVoteResultsRequest' is not null or undefined
        if (listVoteResultsRequest === null || listVoteResultsRequest === undefined) {
            throw new RequiredError("InternalApi", "listVoteRequestResults", "listVoteResultsRequest");
        }


        // Path Params
        const localVarPath = '/v0/admin/sv/voteresults';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(listVoteResultsRequest, "ListVoteResultsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Look up several `VoteRequest`\\ s at once by their contract IDs.
     * @param batchListVotesByVoteRequestsRequest 
     */
    public async listVoteRequestsByTrackingCid(batchListVotesByVoteRequestsRequest: BatchListVotesByVoteRequestsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchListVotesByVoteRequestsRequest' is not null or undefined
        if (batchListVotesByVoteRequestsRequest === null || batchListVotesByVoteRequestsRequest === undefined) {
            throw new RequiredError("InternalApi", "listVoteRequestsByTrackingCid", "batchListVotesByVoteRequestsRequest");
        }


        // Path Params
        const localVarPath = '/v0/voterequest';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchListVotesByVoteRequestsRequest, "BatchListVotesByVoteRequestsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Look up a `VoteRequest` by contract ID.
     * @param voteRequestContractId 
     */
    public async lookupDsoRulesVoteRequest(voteRequestContractId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'voteRequestContractId' is not null or undefined
        if (voteRequestContractId === null || voteRequestContractId === undefined) {
            throw new RequiredError("InternalApi", "lookupDsoRulesVoteRequest", "voteRequestContractId");
        }


        // Path Params
        const localVarPath = '/v0/voterequests/{vote_request_contract_id}'
            .replace('{' + 'vote_request_contract_id' + '}', encodeURIComponent(String(voteRequestContractId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * If `provider_party_id` has a `FeaturedAppRight` registered with the DSO, return it; `featured_app_right` will be empty otherwise. 
     * @param providerPartyId 
     */
    public async lookupFeaturedAppRight(providerPartyId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'providerPartyId' is not null or undefined
        if (providerPartyId === null || providerPartyId === undefined) {
            throw new RequiredError("InternalApi", "lookupFeaturedAppRight", "providerPartyId");
        }


        // Path Params
        const localVarPath = '/v0/featured-apps/{provider_party_id}'
            .replace('{' + 'provider_party_id' + '}', encodeURIComponent(String(providerPartyId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lookup a TransferCommandCounter by the receiver party.
     * @param party 
     */
    public async lookupTransferCommandCounterByParty(party: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'party' is not null or undefined
        if (party === null || party === undefined) {
            throw new RequiredError("InternalApi", "lookupTransferCommandCounterByParty", "party");
        }


        // Path Params
        const localVarPath = '/v0/transfer-command-counter/{party}'
            .replace('{' + 'party' + '}', encodeURIComponent(String(party)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve the status of all transfer commands (up to a limit of 100) of the given sender for the specified nonce.
     * @param sender 
     * @param nonce 
     */
    public async lookupTransferCommandStatus(sender: string, nonce: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'sender' is not null or undefined
        if (sender === null || sender === undefined) {
            throw new RequiredError("InternalApi", "lookupTransferCommandStatus", "sender");
        }


        // verify required parameter 'nonce' is not null or undefined
        if (nonce === null || nonce === undefined) {
            throw new RequiredError("InternalApi", "lookupTransferCommandStatus", "nonce");
        }


        // Path Params
        const localVarPath = '/v0/transfer-command/status';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sender !== undefined) {
            requestContext.setQueryParam("sender", ObjectSerializer.serialize(sender, "string", ""));
        }

        // Query Params
        if (nonce !== undefined) {
            requestContext.setQueryParam("nonce", ObjectSerializer.serialize(nonce, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lookup a TransferPreapproval by the receiver party.
     * @param party 
     */
    public async lookupTransferPreapprovalByParty(party: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'party' is not null or undefined
        if (party === null || party === undefined) {
            throw new RequiredError("InternalApi", "lookupTransferPreapprovalByParty", "party");
        }


        // Path Params
        const localVarPath = '/v0/transfer-preapprovals/by-party/{party}'
            .replace('{' + 'party' + '}', encodeURIComponent(String(party)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class InternalApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to featureSupport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async featureSupportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FeatureSupportResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FeatureSupportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FeatureSupportResponse", ""
            ) as FeatureSupportResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: FeatureSupportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FeatureSupportResponse", ""
            ) as FeatureSupportResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAmuletRules
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAmuletRulesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetAmuletRulesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAmuletRulesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAmuletRulesResponse", ""
            ) as GetAmuletRulesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAmuletRulesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAmuletRulesResponse", ""
            ) as GetAmuletRulesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAnsRules
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAnsRulesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetAnsRulesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAnsRulesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAnsRulesResponse", ""
            ) as GetAnsRulesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAnsRulesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAnsRulesResponse", ""
            ) as GetAnsRulesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBackfillingStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBackfillingStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetBackfillingStatusResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetBackfillingStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBackfillingStatusResponse", ""
            ) as GetBackfillingStatusResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetBackfillingStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBackfillingStatusResponse", ""
            ) as GetBackfillingStatusResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getExternalPartyAmuletRules
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getExternalPartyAmuletRulesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetExternalPartyAmuletRulesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetExternalPartyAmuletRulesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetExternalPartyAmuletRulesResponse", ""
            ) as GetExternalPartyAmuletRulesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetExternalPartyAmuletRulesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetExternalPartyAmuletRulesResponse", ""
            ) as GetExternalPartyAmuletRulesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMigrationInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMigrationInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMigrationInfoResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMigrationInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMigrationInfoResponse", ""
            ) as GetMigrationInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetMigrationInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMigrationInfoResponse", ""
            ) as GetMigrationInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMigrationSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMigrationScheduleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MigrationSchedule >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MigrationSchedule = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MigrationSchedule", ""
            ) as MigrationSchedule;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "No migration scheduled", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MigrationSchedule = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MigrationSchedule", ""
            ) as MigrationSchedule;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpliceInstanceNames
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSpliceInstanceNamesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetSpliceInstanceNamesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetSpliceInstanceNamesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSpliceInstanceNamesResponse", ""
            ) as GetSpliceInstanceNamesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetSpliceInstanceNamesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSpliceInstanceNamesResponse", ""
            ) as GetSpliceInstanceNamesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSynchronizerBootstrappingTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSynchronizerBootstrappingTransactionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SynchronizerBootstrappingTransactions >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SynchronizerBootstrappingTransactions = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SynchronizerBootstrappingTransactions", ""
            ) as SynchronizerBootstrappingTransactions;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SynchronizerBootstrappingTransactions = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SynchronizerBootstrappingTransactions", ""
            ) as SynchronizerBootstrappingTransactions;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSynchronizerIdentities
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSynchronizerIdentitiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SynchronizerIdentities >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SynchronizerIdentities = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SynchronizerIdentities", ""
            ) as SynchronizerIdentities;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SynchronizerIdentities = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SynchronizerIdentities", ""
            ) as SynchronizerIdentities;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTopValidatorsByValidatorFaucets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTopValidatorsByValidatorFaucetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetTopValidatorsByValidatorFaucetsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetTopValidatorsByValidatorFaucetsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTopValidatorsByValidatorFaucetsResponse", ""
            ) as GetTopValidatorsByValidatorFaucetsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetTopValidatorsByValidatorFaucetsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTopValidatorsByValidatorFaucetsResponse", ""
            ) as GetTopValidatorsByValidatorFaucetsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUpdatesBefore
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUpdatesBeforeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetUpdatesBeforeResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetUpdatesBeforeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetUpdatesBeforeResponse", ""
            ) as GetUpdatesBeforeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetUpdatesBeforeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetUpdatesBeforeResponse", ""
            ) as GetUpdatesBeforeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAmuletPriceVotes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAmuletPriceVotesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListAmuletPriceVotesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAmuletPriceVotesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAmuletPriceVotesResponse", ""
            ) as ListAmuletPriceVotesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListAmuletPriceVotesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAmuletPriceVotesResponse", ""
            ) as ListAmuletPriceVotesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDsoRulesVoteRequests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDsoRulesVoteRequestsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListDsoRulesVoteRequestsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListDsoRulesVoteRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListDsoRulesVoteRequestsResponse", ""
            ) as ListDsoRulesVoteRequestsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListDsoRulesVoteRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListDsoRulesVoteRequestsResponse", ""
            ) as ListDsoRulesVoteRequestsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFeaturedAppRights
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listFeaturedAppRightsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListFeaturedAppRightsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListFeaturedAppRightsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFeaturedAppRightsResponse", ""
            ) as ListFeaturedAppRightsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListFeaturedAppRightsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFeaturedAppRightsResponse", ""
            ) as ListFeaturedAppRightsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSvBftSequencers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSvBftSequencersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListSvBftSequencersResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListSvBftSequencersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSvBftSequencersResponse", ""
            ) as ListSvBftSequencersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListSvBftSequencersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSvBftSequencersResponse", ""
            ) as ListSvBftSequencersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVoteRequestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listVoteRequestResultsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListDsoRulesVoteResultsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListDsoRulesVoteResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListDsoRulesVoteResultsResponse", ""
            ) as ListDsoRulesVoteResultsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListDsoRulesVoteResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListDsoRulesVoteResultsResponse", ""
            ) as ListDsoRulesVoteResultsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVoteRequestsByTrackingCid
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listVoteRequestsByTrackingCidWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListVoteRequestByTrackingCidResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListVoteRequestByTrackingCidResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListVoteRequestByTrackingCidResponse", ""
            ) as ListVoteRequestByTrackingCidResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListVoteRequestByTrackingCidResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListVoteRequestByTrackingCidResponse", ""
            ) as ListVoteRequestByTrackingCidResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupDsoRulesVoteRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupDsoRulesVoteRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LookupDsoRulesVoteRequestResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "VoteRequest contract not found.", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupDsoRulesVoteRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupDsoRulesVoteRequestResponse", ""
            ) as LookupDsoRulesVoteRequestResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupDsoRulesVoteRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupDsoRulesVoteRequestResponse", ""
            ) as LookupDsoRulesVoteRequestResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupFeaturedAppRight
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupFeaturedAppRightWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LookupFeaturedAppRightResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupFeaturedAppRightResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupFeaturedAppRightResponse", ""
            ) as LookupFeaturedAppRightResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupFeaturedAppRightResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupFeaturedAppRightResponse", ""
            ) as LookupFeaturedAppRightResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupTransferCommandCounterByParty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupTransferCommandCounterByPartyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LookupTransferCommandCounterByPartyResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupTransferCommandCounterByPartyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupTransferCommandCounterByPartyResponse", ""
            ) as LookupTransferCommandCounterByPartyResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupTransferCommandCounterByPartyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupTransferCommandCounterByPartyResponse", ""
            ) as LookupTransferCommandCounterByPartyResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupTransferCommandStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupTransferCommandStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LookupTransferCommandStatusResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupTransferCommandStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupTransferCommandStatusResponse", ""
            ) as LookupTransferCommandStatusResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupTransferCommandStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupTransferCommandStatusResponse", ""
            ) as LookupTransferCommandStatusResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupTransferPreapprovalByParty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupTransferPreapprovalByPartyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LookupTransferPreapprovalByPartyResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupTransferPreapprovalByPartyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupTransferPreapprovalByPartyResponse", ""
            ) as LookupTransferPreapprovalByPartyResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupTransferPreapprovalByPartyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupTransferPreapprovalByPartyResponse", ""
            ) as LookupTransferPreapprovalByPartyResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
