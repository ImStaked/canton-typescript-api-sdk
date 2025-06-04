// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AcsRequest } from '../models/AcsRequest';
import { AcsResponse } from '../models/AcsResponse';
import { AcsSnapshotTimestampResponse } from '../models/AcsSnapshotTimestampResponse';
import { BatchListVotesByVoteRequestsRequest } from '../models/BatchListVotesByVoteRequestsRequest';
import { DamlValueEncoding } from '../models/DamlValueEncoding';
import { ErrorResponse } from '../models/ErrorResponse';
import { FeatureSupportResponse } from '../models/FeatureSupportResponse';
import { ForceAcsSnapshotResponse } from '../models/ForceAcsSnapshotResponse';
import { GetAmuletRulesRequest } from '../models/GetAmuletRulesRequest';
import { GetAmuletRulesResponse } from '../models/GetAmuletRulesResponse';
import { GetAnsRulesRequest } from '../models/GetAnsRulesRequest';
import { GetAnsRulesResponse } from '../models/GetAnsRulesResponse';
import { GetBackfillingStatusResponse } from '../models/GetBackfillingStatusResponse';
import { GetClosedRoundsResponse } from '../models/GetClosedRoundsResponse';
import { GetDsoInfoResponse } from '../models/GetDsoInfoResponse';
import { GetDsoPartyIdResponse } from '../models/GetDsoPartyIdResponse';
import { GetExternalPartyAmuletRulesRequest } from '../models/GetExternalPartyAmuletRulesRequest';
import { GetExternalPartyAmuletRulesResponse } from '../models/GetExternalPartyAmuletRulesResponse';
import { GetMemberTrafficStatusResponse } from '../models/GetMemberTrafficStatusResponse';
import { GetMigrationInfoRequest } from '../models/GetMigrationInfoRequest';
import { GetMigrationInfoResponse } from '../models/GetMigrationInfoResponse';
import { GetOpenAndIssuingMiningRoundsRequest } from '../models/GetOpenAndIssuingMiningRoundsRequest';
import { GetOpenAndIssuingMiningRoundsResponse } from '../models/GetOpenAndIssuingMiningRoundsResponse';
import { GetPartyToParticipantResponse } from '../models/GetPartyToParticipantResponse';
import { GetRewardsCollectedResponse } from '../models/GetRewardsCollectedResponse';
import { GetRoundOfLatestDataResponse } from '../models/GetRoundOfLatestDataResponse';
import { GetSpliceInstanceNamesResponse } from '../models/GetSpliceInstanceNamesResponse';
import { GetTopProvidersByAppRewardsResponse } from '../models/GetTopProvidersByAppRewardsResponse';
import { GetTopValidatorsByPurchasedTrafficResponse } from '../models/GetTopValidatorsByPurchasedTrafficResponse';
import { GetTopValidatorsByValidatorFaucetsResponse } from '../models/GetTopValidatorsByValidatorFaucetsResponse';
import { GetTopValidatorsByValidatorRewardsResponse } from '../models/GetTopValidatorsByValidatorRewardsResponse';
import { GetTotalAmuletBalanceResponse } from '../models/GetTotalAmuletBalanceResponse';
import { GetUpdatesBeforeRequest } from '../models/GetUpdatesBeforeRequest';
import { GetUpdatesBeforeResponse } from '../models/GetUpdatesBeforeResponse';
import { GetValidatorFaucetsByValidatorResponse } from '../models/GetValidatorFaucetsByValidatorResponse';
import { HoldingsStateRequest } from '../models/HoldingsStateRequest';
import { HoldingsSummaryRequest } from '../models/HoldingsSummaryRequest';
import { HoldingsSummaryResponse } from '../models/HoldingsSummaryResponse';
import { ListActivityRequest } from '../models/ListActivityRequest';
import { ListActivityResponse } from '../models/ListActivityResponse';
import { ListAmuletPriceVotesResponse } from '../models/ListAmuletPriceVotesResponse';
import { ListDsoRulesVoteRequestsResponse } from '../models/ListDsoRulesVoteRequestsResponse';
import { ListDsoRulesVoteResultsResponse } from '../models/ListDsoRulesVoteResultsResponse';
import { ListDsoScansResponse } from '../models/ListDsoScansResponse';
import { ListDsoSequencersResponse } from '../models/ListDsoSequencersResponse';
import { ListEntriesResponse } from '../models/ListEntriesResponse';
import { ListFeaturedAppRightsResponse } from '../models/ListFeaturedAppRightsResponse';
import { ListSvBftSequencersResponse } from '../models/ListSvBftSequencersResponse';
import { ListValidatorLicensesResponse } from '../models/ListValidatorLicensesResponse';
import { ListVoteRequestByTrackingCidResponse } from '../models/ListVoteRequestByTrackingCidResponse';
import { ListVoteResultsRequest } from '../models/ListVoteResultsRequest';
import { LookupDsoRulesVoteRequestResponse } from '../models/LookupDsoRulesVoteRequestResponse';
import { LookupEntryByNameResponse } from '../models/LookupEntryByNameResponse';
import { LookupEntryByPartyResponse } from '../models/LookupEntryByPartyResponse';
import { LookupFeaturedAppRightResponse } from '../models/LookupFeaturedAppRightResponse';
import { LookupTransferCommandCounterByPartyResponse } from '../models/LookupTransferCommandCounterByPartyResponse';
import { LookupTransferCommandStatusResponse } from '../models/LookupTransferCommandStatusResponse';
import { LookupTransferPreapprovalByPartyResponse } from '../models/LookupTransferPreapprovalByPartyResponse';
import { MigrationSchedule } from '../models/MigrationSchedule';
import { SynchronizerBootstrappingTransactions } from '../models/SynchronizerBootstrappingTransactions';
import { SynchronizerIdentities } from '../models/SynchronizerIdentities';
import { UpdateHistoryItem } from '../models/UpdateHistoryItem';
import { UpdateHistoryRequestV1 } from '../models/UpdateHistoryRequestV1';
import { UpdateHistoryResponse } from '../models/UpdateHistoryResponse';

/**
 * no description
 */
export class ScanApiRequestFactory extends BaseAPIRequestFactory {

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
     * Takes a snapshot of the ACS at the current time. The responses can be used as parameters to `/v0/state/acs` to retrieve the snapshot. Disabled in production environments due to its persistent alteration of the behavior of future invocations of `/v0/state/acs`, as it causes an immediate internal snapshot and delay in the next automatic snapshot. 
     */
    public async forceAcsSnapshotNow(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/state/acs/force';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the ACS in creation date ascending order, paged, for a given migration id and record time. 
     * @param acsRequest 
     */
    public async getAcsSnapshotAt(acsRequest: AcsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'acsRequest' is not null or undefined
        if (acsRequest === null || acsRequest === undefined) {
            throw new RequiredError("ScanApi", "getAcsSnapshotAt", "acsRequest");
        }


        // Path Params
        const localVarPath = '/v0/state/acs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(acsRequest, "AcsRequest", ""),
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
     * @param getAmuletRulesRequest 
     */
    public async getAmuletRules(getAmuletRulesRequest: GetAmuletRulesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getAmuletRulesRequest' is not null or undefined
        if (getAmuletRulesRequest === null || getAmuletRulesRequest === undefined) {
            throw new RequiredError("ScanApi", "getAmuletRules", "getAmuletRulesRequest");
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
            throw new RequiredError("ScanApi", "getAnsRules", "getAnsRulesRequest");
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
     * Every closed mining round on the ledger still in post-close process for the connected Splice network, in round number order, earliest-first. 
     */
    public async getClosedRounds(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/closed-rounds';

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
     * Returns the timestamp of the most recent snapshot before the given date, for the given migration_id. This corresponds to the record time of the last transaction in the snapshot. 
     * @param before 
     * @param migrationId 
     */
    public async getDateOfMostRecentSnapshotBefore(before: Date, migrationId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'before' is not null or undefined
        if (before === null || before === undefined) {
            throw new RequiredError("ScanApi", "getDateOfMostRecentSnapshotBefore", "before");
        }


        // verify required parameter 'migrationId' is not null or undefined
        if (migrationId === null || migrationId === undefined) {
            throw new RequiredError("ScanApi", "getDateOfMostRecentSnapshotBefore", "migrationId");
        }


        // Path Params
        const localVarPath = '/v0/state/acs/snapshot-timestamp';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }

        // Query Params
        if (migrationId !== undefined) {
            requestContext.setQueryParam("migration_id", ObjectSerializer.serialize(migrationId, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async getDsoInfo(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/dso';

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
     * The party ID of the DSO for the Splice network connected by this Scan app. 
     */
    public async getDsoPartyId(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/dso-party-id';

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
            throw new RequiredError("ScanApi", "getExternalPartyAmuletRules", "getExternalPartyAmuletRulesRequest");
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
     * Returns the active amulet contracts for a given migration id and record time, in creation date ascending order, paged. 
     * @param holdingsStateRequest 
     */
    public async getHoldingsStateAt(holdingsStateRequest: HoldingsStateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'holdingsStateRequest' is not null or undefined
        if (holdingsStateRequest === null || holdingsStateRequest === undefined) {
            throw new RequiredError("ScanApi", "getHoldingsStateAt", "holdingsStateRequest");
        }


        // Path Params
        const localVarPath = '/v0/holdings/state';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(holdingsStateRequest, "HoldingsStateRequest", ""),
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
     * Returns the summary of active amulet contracts for a given migration id and record time, for the given parties. This is an aggregate of `/v0/holdings/state` by owner party ID with better performance than client-side computation. 
     * @param holdingsSummaryRequest 
     */
    public async getHoldingsSummaryAt(holdingsSummaryRequest: HoldingsSummaryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'holdingsSummaryRequest' is not null or undefined
        if (holdingsSummaryRequest === null || holdingsSummaryRequest === undefined) {
            throw new RequiredError("ScanApi", "getHoldingsSummaryAt", "holdingsSummaryRequest");
        }


        // Path Params
        const localVarPath = '/v0/holdings/summary';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(holdingsSummaryRequest, "HoldingsSummaryRequest", ""),
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
     * Get a member\'s traffic status as reported by the sequencer, according to ledger state at the time of the request. 
     * @param domainId The synchronizer ID to look up traffic for. 
     * @param memberId The participant or mediator whose traffic to look up, in the format &#x60;code::id::fingerprint&#x60; where &#x60;code&#x60; is &#x60;PAR&#x60; or &#x60;MED&#x60;. 
     */
    public async getMemberTrafficStatus(domainId: string, memberId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'domainId' is not null or undefined
        if (domainId === null || domainId === undefined) {
            throw new RequiredError("ScanApi", "getMemberTrafficStatus", "domainId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("ScanApi", "getMemberTrafficStatus", "memberId");
        }


        // Path Params
        const localVarPath = '/v0/domains/{domain_id}/members/{member_id}/traffic-status'
            .replace('{' + 'domain_id' + '}', encodeURIComponent(String(domainId)))
            .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)));

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
     * List all previous synchronizer migrations in this Splice network\'s history. 
     * @param getMigrationInfoRequest 
     */
    public async getMigrationInfo(getMigrationInfoRequest: GetMigrationInfoRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getMigrationInfoRequest' is not null or undefined
        if (getMigrationInfoRequest === null || getMigrationInfoRequest === undefined) {
            throw new RequiredError("ScanApi", "getMigrationInfo", "getMigrationInfoRequest");
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
     * All current open and issuing mining rounds, if the request is empty; passing contract IDs in the request can reduce the response data for polling/client-cache-update efficiency. 
     * @param getOpenAndIssuingMiningRoundsRequest 
     */
    public async getOpenAndIssuingMiningRounds(getOpenAndIssuingMiningRoundsRequest: GetOpenAndIssuingMiningRoundsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getOpenAndIssuingMiningRoundsRequest' is not null or undefined
        if (getOpenAndIssuingMiningRoundsRequest === null || getOpenAndIssuingMiningRoundsRequest === undefined) {
            throw new RequiredError("ScanApi", "getOpenAndIssuingMiningRounds", "getOpenAndIssuingMiningRoundsRequest");
        }


        // Path Params
        const localVarPath = '/v0/open-and-issuing-mining-rounds';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getOpenAndIssuingMiningRoundsRequest, "GetOpenAndIssuingMiningRoundsRequest", ""),
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
     * Get the ID of the participant hosting a given party.  This will fail if there are multiple party-to-participant mappings for the given synchronizer and party, which is not currently supported. 
     * @param domainId The synchronizer ID to look up a mapping for. 
     * @param partyId The party ID to lookup a participant ID for. 
     */
    public async getPartyToParticipant(domainId: string, partyId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'domainId' is not null or undefined
        if (domainId === null || domainId === undefined) {
            throw new RequiredError("ScanApi", "getPartyToParticipant", "domainId");
        }


        // verify required parameter 'partyId' is not null or undefined
        if (partyId === null || partyId === undefined) {
            throw new RequiredError("ScanApi", "getPartyToParticipant", "partyId");
        }


        // Path Params
        const localVarPath = '/v0/domains/{domain_id}/parties/{party_id}/participant-id'
            .replace('{' + 'domain_id' + '}', encodeURIComponent(String(domainId)))
            .replace('{' + 'party_id' + '}', encodeURIComponent(String(partyId)));

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
     * **Deprecated**. Get the total rewards collected ever
     * @param round 
     */
    public async getRewardsCollected(round?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v0/rewards-collected';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (round !== undefined) {
            requestContext.setQueryParam("round", ObjectSerializer.serialize(round, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * **Deprecated**. Get the latest round number for which aggregated data is available and the ledger effective time at which the round was closed. 
     */
    public async getRoundOfLatestData(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/round-of-latest-data';

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
            throw new RequiredError("ScanApi", "getSynchronizerBootstrappingTransactions", "domainIdPrefix");
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
            throw new RequiredError("ScanApi", "getSynchronizerIdentities", "domainIdPrefix");
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
     * **Deprecated**. Get a list of top-earning app providers, and the total earned app rewards for each 
     * @param round 
     * @param limit 
     */
    public async getTopProvidersByAppRewards(round: number, limit: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'round' is not null or undefined
        if (round === null || round === undefined) {
            throw new RequiredError("ScanApi", "getTopProvidersByAppRewards", "round");
        }


        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new RequiredError("ScanApi", "getTopProvidersByAppRewards", "limit");
        }


        // Path Params
        const localVarPath = '/v0/top-providers-by-app-rewards';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (round !== undefined) {
            requestContext.setQueryParam("round", ObjectSerializer.serialize(round, "number", "int64"));
        }

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
     * **Deprecated**. Get a list of validators and their domain fees spends, sorted by the amount of extra traffic purchased 
     * @param round 
     * @param limit 
     */
    public async getTopValidatorsByPurchasedTraffic(round: number, limit: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'round' is not null or undefined
        if (round === null || round === undefined) {
            throw new RequiredError("ScanApi", "getTopValidatorsByPurchasedTraffic", "round");
        }


        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new RequiredError("ScanApi", "getTopValidatorsByPurchasedTraffic", "limit");
        }


        // Path Params
        const localVarPath = '/v0/top-validators-by-purchased-traffic';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (round !== undefined) {
            requestContext.setQueryParam("round", ObjectSerializer.serialize(round, "number", "int64"));
        }

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
     * Get a list of top validators by number of rounds in which they collected faucets, and basis statistics on their round collection history 
     * @param limit Maximum number of validator records that may be returned in the response 
     */
    public async getTopValidatorsByValidatorFaucets(limit: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new RequiredError("ScanApi", "getTopValidatorsByValidatorFaucets", "limit");
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
     * **Deprecated**. Get a list of top-earning validators, and the total earned validator rewards for each 
     * @param round 
     * @param limit 
     */
    public async getTopValidatorsByValidatorRewards(round: number, limit: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'round' is not null or undefined
        if (round === null || round === undefined) {
            throw new RequiredError("ScanApi", "getTopValidatorsByValidatorRewards", "round");
        }


        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new RequiredError("ScanApi", "getTopValidatorsByValidatorRewards", "limit");
        }


        // Path Params
        const localVarPath = '/v0/top-validators-by-validator-rewards';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (round !== undefined) {
            requestContext.setQueryParam("round", ObjectSerializer.serialize(round, "number", "int64"));
        }

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
     * **Deprecated**. Get the total balance of Amulet in the network
     * @param asOfEndOfRound 
     */
    public async getTotalAmuletBalance(asOfEndOfRound: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'asOfEndOfRound' is not null or undefined
        if (asOfEndOfRound === null || asOfEndOfRound === undefined) {
            throw new RequiredError("ScanApi", "getTotalAmuletBalance", "asOfEndOfRound");
        }


        // Path Params
        const localVarPath = '/v0/total-amulet-balance';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (asOfEndOfRound !== undefined) {
            requestContext.setQueryParam("asOfEndOfRound", ObjectSerializer.serialize(asOfEndOfRound, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the update with the given update_id. Unlike /v0/updates/{update_id}, this endpoint returns responses that are consistent across different scan instances. Event ids returned by this endpoint are not comparable to event ids returned by /v0/updates. 
     * @param updateId 
     * @param damlValueEncoding 
     */
    public async getUpdateByIdV1(updateId: string, damlValueEncoding?: DamlValueEncoding, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'updateId' is not null or undefined
        if (updateId === null || updateId === undefined) {
            throw new RequiredError("ScanApi", "getUpdateByIdV1", "updateId");
        }



        // Path Params
        const localVarPath = '/v1/updates/{update_id}'
            .replace('{' + 'update_id' + '}', encodeURIComponent(String(updateId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (damlValueEncoding !== undefined) {
            requestContext.setQueryParam("daml_value_encoding", ObjectSerializer.serialize(damlValueEncoding, "DamlValueEncoding", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the update history in ascending order, paged, from ledger begin or optionally starting after a record time. Unlike /v0/updates, this endpoint returns responses that are consistent across different scan instances. Event ids returned by this endpoint are not comparable to event ids returned by /v0/updates.  Updates are ordered lexicographically by `(migration id, record time)`. For a given migration id, each update has a unique record time. The record time ranges of different migrations may overlap, i.e., it is not guaranteed that the maximum record time of one migration is smaller than the minimum record time of the next migration, and there may be two updates with the same record time but different migration ids. 
     * @param updateHistoryRequestV1 
     */
    public async getUpdateHistoryV1(updateHistoryRequestV1: UpdateHistoryRequestV1, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'updateHistoryRequestV1' is not null or undefined
        if (updateHistoryRequestV1 === null || updateHistoryRequestV1 === undefined) {
            throw new RequiredError("ScanApi", "getUpdateHistoryV1", "updateHistoryRequestV1");
        }


        // Path Params
        const localVarPath = '/v1/updates';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateHistoryRequestV1, "UpdateHistoryRequestV1", ""),
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
     * Retrieve transactions and synchronizer reassignments prior to the request\'s specification. 
     * @param getUpdatesBeforeRequest 
     */
    public async getUpdatesBefore(getUpdatesBeforeRequest: GetUpdatesBeforeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getUpdatesBeforeRequest' is not null or undefined
        if (getUpdatesBeforeRequest === null || getUpdatesBeforeRequest === undefined) {
            throw new RequiredError("ScanApi", "getUpdatesBefore", "getUpdatesBeforeRequest");
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
     * For every argument that is a valid onboarded validator, return statistics on its liveness activity, according to on-ledger state at the time of the request. 
     * @param validatorIds A list of validator party IDs, one per specification of the parameter. Any party IDs not matching onboarded validators will be ignored 
     */
    public async getValidatorFaucetsByValidator(validatorIds: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'validatorIds' is not null or undefined
        if (validatorIds === null || validatorIds === undefined) {
            throw new RequiredError("ScanApi", "getValidatorFaucetsByValidator", "validatorIds");
        }


        // Path Params
        const localVarPath = '/v0/validators/validator-faucets';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (validatorIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(validatorIds, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("validator_ids", serializedParam);
            }
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * **Deprecated**. Lists activities in descending order, paged, optionally starting after a provided event id. 
     * @param listActivityRequest 
     */
    public async listActivity(listActivityRequest: ListActivityRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listActivityRequest' is not null or undefined
        if (listActivityRequest === null || listActivityRequest === undefined) {
            throw new RequiredError("ScanApi", "listActivity", "listActivityRequest");
        }


        // Path Params
        const localVarPath = '/v0/activities';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(listActivityRequest, "ListActivityRequest", ""),
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
     * Lists all non-expired ANS entries whose names are prefixed with the `name_prefix`, up to `page_size` entries. 
     * @param pageSize The maximum number of results returned. Older (but still non-expired) results are listed first. 
     * @param namePrefix Every result\&#39;s name will start with this substring; if empty or absent, all entries will be listed. Does not have to be a whole word or segment; any substring will be accepted. 
     */
    public async listAnsEntries(pageSize: number, namePrefix?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pageSize' is not null or undefined
        if (pageSize === null || pageSize === undefined) {
            throw new RequiredError("ScanApi", "listAnsEntries", "pageSize");
        }



        // Path Params
        const localVarPath = '/v0/ans-entries';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (namePrefix !== undefined) {
            requestContext.setQueryParam("name_prefix", ObjectSerializer.serialize(namePrefix, "string", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }


        
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
     * Retrieve Canton scan configuration for all SVs, grouped by connected synchronizer ID 
     */
    public async listDsoScans(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/scans';

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
     * Retrieve Canton sequencer configuration for all SVs, grouped by connected synchronizer ID 
     */
    public async listDsoSequencers(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/dso-sequencers';

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
     * List all validators currently approved by members of the DSO, paginated, sorted newest-first. 
     * @param after A &#x60;next_page_token&#x60; from a prior response; if absent, return the first page. 
     * @param limit Maximum number of elements to return, 1000 by default.
     */
    public async listValidatorLicenses(after?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v0/admin/validator/licenses';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "number", "int64"));
        }

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
     * @param listVoteResultsRequest 
     */
    public async listVoteRequestResults(listVoteResultsRequest: ListVoteResultsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listVoteResultsRequest' is not null or undefined
        if (listVoteResultsRequest === null || listVoteResultsRequest === undefined) {
            throw new RequiredError("ScanApi", "listVoteRequestResults", "listVoteResultsRequest");
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
            throw new RequiredError("ScanApi", "listVoteRequestsByTrackingCid", "batchListVotesByVoteRequestsRequest");
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
     * If present, the ANS entry named exactly `name`.
     * @param name 
     */
    public async lookupAnsEntryByName(name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("ScanApi", "lookupAnsEntryByName", "name");
        }


        // Path Params
        const localVarPath = '/v0/ans-entries/by-name/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
     * If present, the first ANS entry for user `party` according to `name` lexicographic order. 
     * @param party The user party ID that holds the ANS entry.
     */
    public async lookupAnsEntryByParty(party: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'party' is not null or undefined
        if (party === null || party === undefined) {
            throw new RequiredError("ScanApi", "lookupAnsEntryByParty", "party");
        }


        // Path Params
        const localVarPath = '/v0/ans-entries/by-party/{party}'
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
     * Look up a `VoteRequest` by contract ID.
     * @param voteRequestContractId 
     */
    public async lookupDsoRulesVoteRequest(voteRequestContractId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'voteRequestContractId' is not null or undefined
        if (voteRequestContractId === null || voteRequestContractId === undefined) {
            throw new RequiredError("ScanApi", "lookupDsoRulesVoteRequest", "voteRequestContractId");
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
            throw new RequiredError("ScanApi", "lookupFeaturedAppRight", "providerPartyId");
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
            throw new RequiredError("ScanApi", "lookupTransferCommandCounterByParty", "party");
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
            throw new RequiredError("ScanApi", "lookupTransferCommandStatus", "sender");
        }


        // verify required parameter 'nonce' is not null or undefined
        if (nonce === null || nonce === undefined) {
            throw new RequiredError("ScanApi", "lookupTransferCommandStatus", "nonce");
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
            throw new RequiredError("ScanApi", "lookupTransferPreapprovalByParty", "party");
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

export class ScanApiResponseProcessor {

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
     * @params response Response returned by the server for a request to forceAcsSnapshotNow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async forceAcsSnapshotNowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ForceAcsSnapshotResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ForceAcsSnapshotResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ForceAcsSnapshotResponse", ""
            ) as ForceAcsSnapshotResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "bad request", body, response.headers);
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
            const body: ForceAcsSnapshotResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ForceAcsSnapshotResponse", ""
            ) as ForceAcsSnapshotResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAcsSnapshotAt
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAcsSnapshotAtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AcsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AcsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AcsResponse", ""
            ) as AcsResponse;
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
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AcsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AcsResponse", ""
            ) as AcsResponse;
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
     * @params response Response returned by the server for a request to getClosedRounds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getClosedRoundsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetClosedRoundsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetClosedRoundsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetClosedRoundsResponse", ""
            ) as GetClosedRoundsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetClosedRoundsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetClosedRoundsResponse", ""
            ) as GetClosedRoundsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDateOfMostRecentSnapshotBefore
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDateOfMostRecentSnapshotBeforeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AcsSnapshotTimestampResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AcsSnapshotTimestampResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AcsSnapshotTimestampResponse", ""
            ) as AcsSnapshotTimestampResponse;
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
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AcsSnapshotTimestampResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AcsSnapshotTimestampResponse", ""
            ) as AcsSnapshotTimestampResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDsoInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDsoInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetDsoInfoResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetDsoInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDsoInfoResponse", ""
            ) as GetDsoInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetDsoInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDsoInfoResponse", ""
            ) as GetDsoInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDsoPartyId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDsoPartyIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetDsoPartyIdResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetDsoPartyIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDsoPartyIdResponse", ""
            ) as GetDsoPartyIdResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetDsoPartyIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDsoPartyIdResponse", ""
            ) as GetDsoPartyIdResponse;
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
     * @params response Response returned by the server for a request to getHoldingsStateAt
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getHoldingsStateAtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AcsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AcsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AcsResponse", ""
            ) as AcsResponse;
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
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AcsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AcsResponse", ""
            ) as AcsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHoldingsSummaryAt
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getHoldingsSummaryAtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<HoldingsSummaryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HoldingsSummaryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HoldingsSummaryResponse", ""
            ) as HoldingsSummaryResponse;
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
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HoldingsSummaryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HoldingsSummaryResponse", ""
            ) as HoldingsSummaryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMemberTrafficStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMemberTrafficStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMemberTrafficStatusResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMemberTrafficStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMemberTrafficStatusResponse", ""
            ) as GetMemberTrafficStatusResponse;
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
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetMemberTrafficStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMemberTrafficStatusResponse", ""
            ) as GetMemberTrafficStatusResponse;
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
     * @params response Response returned by the server for a request to getOpenAndIssuingMiningRounds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOpenAndIssuingMiningRoundsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetOpenAndIssuingMiningRoundsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetOpenAndIssuingMiningRoundsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetOpenAndIssuingMiningRoundsResponse", ""
            ) as GetOpenAndIssuingMiningRoundsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetOpenAndIssuingMiningRoundsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetOpenAndIssuingMiningRoundsResponse", ""
            ) as GetOpenAndIssuingMiningRoundsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPartyToParticipant
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartyToParticipantWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetPartyToParticipantResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPartyToParticipantResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPartyToParticipantResponse", ""
            ) as GetPartyToParticipantResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
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
            const body: GetPartyToParticipantResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPartyToParticipantResponse", ""
            ) as GetPartyToParticipantResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRewardsCollected
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRewardsCollectedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetRewardsCollectedResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetRewardsCollectedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetRewardsCollectedResponse", ""
            ) as GetRewardsCollectedResponse;
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
            const body: GetRewardsCollectedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetRewardsCollectedResponse", ""
            ) as GetRewardsCollectedResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRoundOfLatestData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRoundOfLatestDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetRoundOfLatestDataResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetRoundOfLatestDataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetRoundOfLatestDataResponse", ""
            ) as GetRoundOfLatestDataResponse;
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
            const body: GetRoundOfLatestDataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetRoundOfLatestDataResponse", ""
            ) as GetRoundOfLatestDataResponse;
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
     * @params response Response returned by the server for a request to getTopProvidersByAppRewards
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTopProvidersByAppRewardsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetTopProvidersByAppRewardsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetTopProvidersByAppRewardsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTopProvidersByAppRewardsResponse", ""
            ) as GetTopProvidersByAppRewardsResponse;
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
            const body: GetTopProvidersByAppRewardsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTopProvidersByAppRewardsResponse", ""
            ) as GetTopProvidersByAppRewardsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTopValidatorsByPurchasedTraffic
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTopValidatorsByPurchasedTrafficWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetTopValidatorsByPurchasedTrafficResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetTopValidatorsByPurchasedTrafficResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTopValidatorsByPurchasedTrafficResponse", ""
            ) as GetTopValidatorsByPurchasedTrafficResponse;
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
            const body: GetTopValidatorsByPurchasedTrafficResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTopValidatorsByPurchasedTrafficResponse", ""
            ) as GetTopValidatorsByPurchasedTrafficResponse;
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
     * @params response Response returned by the server for a request to getTopValidatorsByValidatorRewards
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTopValidatorsByValidatorRewardsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetTopValidatorsByValidatorRewardsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetTopValidatorsByValidatorRewardsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTopValidatorsByValidatorRewardsResponse", ""
            ) as GetTopValidatorsByValidatorRewardsResponse;
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
            const body: GetTopValidatorsByValidatorRewardsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTopValidatorsByValidatorRewardsResponse", ""
            ) as GetTopValidatorsByValidatorRewardsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTotalAmuletBalance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTotalAmuletBalanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetTotalAmuletBalanceResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetTotalAmuletBalanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTotalAmuletBalanceResponse", ""
            ) as GetTotalAmuletBalanceResponse;
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
            const body: GetTotalAmuletBalanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTotalAmuletBalanceResponse", ""
            ) as GetTotalAmuletBalanceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUpdateByIdV1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUpdateByIdV1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateHistoryItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateHistoryItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateHistoryItem", ""
            ) as UpdateHistoryItem;
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
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateHistoryItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateHistoryItem", ""
            ) as UpdateHistoryItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUpdateHistoryV1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUpdateHistoryV1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateHistoryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateHistoryResponse", ""
            ) as UpdateHistoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "bad request", body, response.headers);
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
            const body: UpdateHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateHistoryResponse", ""
            ) as UpdateHistoryResponse;
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
     * @params response Response returned by the server for a request to getValidatorFaucetsByValidator
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidatorFaucetsByValidatorWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetValidatorFaucetsByValidatorResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetValidatorFaucetsByValidatorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetValidatorFaucetsByValidatorResponse", ""
            ) as GetValidatorFaucetsByValidatorResponse;
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
            const body: GetValidatorFaucetsByValidatorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetValidatorFaucetsByValidatorResponse", ""
            ) as GetValidatorFaucetsByValidatorResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listActivity
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listActivityWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListActivityResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListActivityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListActivityResponse", ""
            ) as ListActivityResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
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
            const body: ListActivityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListActivityResponse", ""
            ) as ListActivityResponse;
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
     * @params response Response returned by the server for a request to listAnsEntries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAnsEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListEntriesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListEntriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntriesResponse", ""
            ) as ListEntriesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListEntriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntriesResponse", ""
            ) as ListEntriesResponse;
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
     * @params response Response returned by the server for a request to listDsoScans
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDsoScansWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListDsoScansResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListDsoScansResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListDsoScansResponse", ""
            ) as ListDsoScansResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListDsoScansResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListDsoScansResponse", ""
            ) as ListDsoScansResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDsoSequencers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDsoSequencersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListDsoSequencersResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListDsoSequencersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListDsoSequencersResponse", ""
            ) as ListDsoSequencersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListDsoSequencersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListDsoSequencersResponse", ""
            ) as ListDsoSequencersResponse;
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
     * @params response Response returned by the server for a request to listValidatorLicenses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listValidatorLicensesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListValidatorLicensesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListValidatorLicensesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListValidatorLicensesResponse", ""
            ) as ListValidatorLicensesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListValidatorLicensesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListValidatorLicensesResponse", ""
            ) as ListValidatorLicensesResponse;
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
     * @params response Response returned by the server for a request to lookupAnsEntryByName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupAnsEntryByNameWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LookupEntryByNameResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupEntryByNameResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupEntryByNameResponse", ""
            ) as LookupEntryByNameResponse;
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
            const body: LookupEntryByNameResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupEntryByNameResponse", ""
            ) as LookupEntryByNameResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupAnsEntryByParty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupAnsEntryByPartyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LookupEntryByPartyResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupEntryByPartyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupEntryByPartyResponse", ""
            ) as LookupEntryByPartyResponse;
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
            const body: LookupEntryByPartyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupEntryByPartyResponse", ""
            ) as LookupEntryByPartyResponse;
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
