// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateExternalPartySetupProposalRequest } from '../models/CreateExternalPartySetupProposalRequest';
import { CreateExternalPartySetupProposalResponse } from '../models/CreateExternalPartySetupProposalResponse';
import { ErrorResponse } from '../models/ErrorResponse';
import { ExternalPartyBalanceResponse } from '../models/ExternalPartyBalanceResponse';
import { GenerateExternalPartyTopologyRequest } from '../models/GenerateExternalPartyTopologyRequest';
import { GenerateExternalPartyTopologyResponse } from '../models/GenerateExternalPartyTopologyResponse';
import { GetDecentralizedSynchronizerConnectionConfigResponse } from '../models/GetDecentralizedSynchronizerConnectionConfigResponse';
import { GetValidatorDomainDataSnapshotResponse } from '../models/GetValidatorDomainDataSnapshotResponse';
import { ListExternalPartySetupProposalsResponse } from '../models/ListExternalPartySetupProposalsResponse';
import { ListTransferPreapprovalsResponse } from '../models/ListTransferPreapprovalsResponse';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { LookupTransferPreapprovalByPartyResponse } from '../models/LookupTransferPreapprovalByPartyResponse';
import { NodeIdentitiesDump } from '../models/NodeIdentitiesDump';
import { OnboardUserRequest } from '../models/OnboardUserRequest';
import { OnboardUserResponse } from '../models/OnboardUserResponse';
import { PrepareAcceptExternalPartySetupProposalRequest } from '../models/PrepareAcceptExternalPartySetupProposalRequest';
import { PrepareAcceptExternalPartySetupProposalResponse } from '../models/PrepareAcceptExternalPartySetupProposalResponse';
import { PrepareTransferPreapprovalSendRequest } from '../models/PrepareTransferPreapprovalSendRequest';
import { PrepareTransferPreapprovalSendResponse } from '../models/PrepareTransferPreapprovalSendResponse';
import { RegistrationResponse } from '../models/RegistrationResponse';
import { SubmitAcceptExternalPartySetupProposalRequest } from '../models/SubmitAcceptExternalPartySetupProposalRequest';
import { SubmitAcceptExternalPartySetupProposalResponse } from '../models/SubmitAcceptExternalPartySetupProposalResponse';
import { SubmitExternalPartyTopologyRequest } from '../models/SubmitExternalPartyTopologyRequest';
import { SubmitExternalPartyTopologyResponse } from '../models/SubmitExternalPartyTopologyResponse';
import { SubmitTransferPreapprovalSendRequest } from '../models/SubmitTransferPreapprovalSendRequest';
import { SubmitTransferPreapprovalSendResponse } from '../models/SubmitTransferPreapprovalSendResponse';

/**
 * no description
 */
export class ValidatorApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Remove the `Splice.AmuletRules.TransferPreapproval` contract for the given receiver party. 
     * @param receiverParty 
     */
    public async cancelTransferPreapprovalByParty(receiverParty: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'receiverParty' is not null or undefined
        if (receiverParty === null || receiverParty === undefined) {
            throw new RequiredError("ValidatorApi", "cancelTransferPreapprovalByParty", "receiverParty");
        }


        // Path Params
        const localVarPath = '/v0/admin/transfer-preapprovals/by-party/{receiver-party}'
            .replace('{' + 'receiver-party' + '}', encodeURIComponent(String(receiverParty)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create the ExternalPartySetupProposal contract as the validator operator which then has to be accepted by the external party using /v0/admin/external-party/setup-proposal/prepare-accept and /v0/admin/external-party/setup-proposal/submit-accept 
     * @param createExternalPartySetupProposalRequest 
     */
    public async createExternalPartySetupProposal(createExternalPartySetupProposalRequest: CreateExternalPartySetupProposalRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createExternalPartySetupProposalRequest' is not null or undefined
        if (createExternalPartySetupProposalRequest === null || createExternalPartySetupProposalRequest === undefined) {
            throw new RequiredError("ValidatorApi", "createExternalPartySetupProposal", "createExternalPartySetupProposalRequest");
        }


        // Path Params
        const localVarPath = '/v0/admin/external-party/setup-proposal';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createExternalPartySetupProposalRequest, "CreateExternalPartySetupProposalRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a dump of participant identities.  Use this endpoint if instructed to do so by an operational manual or support. 
     */
    public async dumpParticipantIdentities(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/admin/participant/identities';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a root namespace topology transaction, which will create the party and sets the public key controlling the party namespace, a party to participant mapping topology transaction, which hosts the party on the participant with Confirmation rights, and a party to key mapping topology transaction, which sets the key to authorize daml transactions. The hash of each of these transactions will be signed along with the corresponding topology transaction (unchanged) in the /v0/admin/external-party/topology/submit endpoint 
     * @param generateExternalPartyTopologyRequest 
     */
    public async generateExternalPartyTopology(generateExternalPartyTopologyRequest: GenerateExternalPartyTopologyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'generateExternalPartyTopologyRequest' is not null or undefined
        if (generateExternalPartyTopologyRequest === null || generateExternalPartyTopologyRequest === undefined) {
            throw new RequiredError("ValidatorApi", "generateExternalPartyTopology", "generateExternalPartyTopologyRequest");
        }


        // Path Params
        const localVarPath = '/v0/admin/external-party/topology/generate';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(generateExternalPartyTopologyRequest, "GenerateExternalPartyTopologyRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the connection configuration for the global synchronizer.  Use this endpoint if instructed to do so by an operational manual or support. 
     */
    public async getDecentralizedSynchronizerConnectionConfig(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/admin/participant/global-domain-connection-config';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the balance of an external party. 
     * @param partyId 
     */
    public async getExternalPartyBalance(partyId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'partyId' is not null or undefined
        if (partyId === null || partyId === undefined) {
            throw new RequiredError("ValidatorApi", "getExternalPartyBalance", "partyId");
        }


        // Path Params
        const localVarPath = '/v0/admin/external-party/balance';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (partyId !== undefined) {
            requestContext.setQueryParam("party_id", ObjectSerializer.serialize(partyId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a snapshot of the global synchronizer data for this validator. The snapshot includes a list of parties, the active contract set (ACS), and node identities.  Use this endpoint if instructed to do so by an operational manual or support. 
     * @param timestamp The timestamp as of which the dump (in particular, the ACS) is valid.  Must in the ISO-8601 format in UTC timezone, e.g., &#x60;yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSS\&#39;Z\&#39;&#x60;. 
     * @param migrationId The current migration id. 
     * @param force If true, do not check whether the provided timestamp is clean. Not recommended for production, see the &#x60;ExportAcs&#x60; endpoint of the &#x60;ParticipantRepairService&#x60; participant gRPC API. 
     */
    public async getValidatorDomainDataSnapshot(timestamp: string, migrationId?: number, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'timestamp' is not null or undefined
        if (timestamp === null || timestamp === undefined) {
            throw new RequiredError("ValidatorApi", "getValidatorDomainDataSnapshot", "timestamp");
        }




        // Path Params
        const localVarPath = '/v0/admin/domain/data-snapshot';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (timestamp !== undefined) {
            requestContext.setQueryParam("timestamp", ObjectSerializer.serialize(timestamp, "string", ""));
        }

        // Query Params
        if (migrationId !== undefined) {
            requestContext.setQueryParam("migration_id", ObjectSerializer.serialize(migrationId, "number", "int64"));
        }

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List all ExternalPartySetupProposal contracts. 
     */
    public async listExternalPartySetupProposals(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/admin/external-party/setup-proposal';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List all `Splice.AmuletRules.TransferPreapproval` contracts where the preapproval provider is the validator operator. 
     */
    public async listTransferPreapprovals(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/admin/transfer-preapprovals';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists all users onboarded onto this validator. 
     */
    public async listUsers(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v0/admin/users';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lookup the `Splice.AmuletRules.TransferPreapproval` contract for the given receiver party. 
     * @param receiverParty 
     */
    public async lookupTransferPreapprovalByParty(receiverParty: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'receiverParty' is not null or undefined
        if (receiverParty === null || receiverParty === undefined) {
            throw new RequiredError("ValidatorApi", "lookupTransferPreapprovalByParty", "receiverParty");
        }


        // Path Params
        const localVarPath = '/v0/admin/transfer-preapprovals/by-party/{receiver-party}'
            .replace('{' + 'receiver-party' + '}', encodeURIComponent(String(receiverParty)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * As the validator operator, offboard the user specified in the request. Offboarding archives the daml contracts required for the user to use a wallet on this validator. Offboarding does not delete the ledger API user, and does not archive any other daml contracts owned by the user. 
     * @param username 
     */
    public async offboardUser(username: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError("ValidatorApi", "offboardUser", "username");
        }


        // Path Params
        const localVarPath = '/v0/admin/users/offboard';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (username !== undefined) {
            requestContext.setQueryParam("username", ObjectSerializer.serialize(username, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * As the validator operator, onboard an arbitrary user specified in the request. Onboarding includes allocating a ledger API user and daml party, and setting up daml contracts required for the user to use a wallet on this validator.  Once this call returns a successful response, the user is fully onboarded. Use [v0/wallet/user-status](../../../../wallet/src/main/openapi/wallet-internal.yaml#/paths/v0/wallet/user-status) to check the status of the user onboarding. 
     * @param onboardUserRequest 
     */
    public async onboardUser(onboardUserRequest: OnboardUserRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'onboardUserRequest' is not null or undefined
        if (onboardUserRequest === null || onboardUserRequest === undefined) {
            throw new RequiredError("ValidatorApi", "onboardUser", "onboardUserRequest");
        }


        // Path Params
        const localVarPath = '/v0/admin/users';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(onboardUserRequest, "OnboardUserRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Given a contract id of an ExternalPartySetupProposal, prepare the transaction to accept it such that it can be signed externally and then submitted using /v0/admin/external-party/setup-proposal/submit-accept 
     * @param prepareAcceptExternalPartySetupProposalRequest 
     */
    public async prepareAcceptExternalPartySetupProposal(prepareAcceptExternalPartySetupProposalRequest: PrepareAcceptExternalPartySetupProposalRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'prepareAcceptExternalPartySetupProposalRequest' is not null or undefined
        if (prepareAcceptExternalPartySetupProposalRequest === null || prepareAcceptExternalPartySetupProposalRequest === undefined) {
            throw new RequiredError("ValidatorApi", "prepareAcceptExternalPartySetupProposal", "prepareAcceptExternalPartySetupProposalRequest");
        }


        // Path Params
        const localVarPath = '/v0/admin/external-party/setup-proposal/prepare-accept';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(prepareAcceptExternalPartySetupProposalRequest, "PrepareAcceptExternalPartySetupProposalRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Prepare a transaction to create a TransferCommand with the given CC amount to the specified receiver from the externally hosted sender. The transaction then needs to be signed and submitted through /v0/admin/external-party/transfer-preapproval/submit-send. 
     * @param prepareTransferPreapprovalSendRequest 
     */
    public async prepareTransferPreapprovalSend(prepareTransferPreapprovalSendRequest: PrepareTransferPreapprovalSendRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'prepareTransferPreapprovalSendRequest' is not null or undefined
        if (prepareTransferPreapprovalSendRequest === null || prepareTransferPreapprovalSendRequest === undefined) {
            throw new RequiredError("ValidatorApi", "prepareTransferPreapprovalSend", "prepareTransferPreapprovalSendRequest");
        }


        // Path Params
        const localVarPath = '/v0/admin/external-party/transfer-preapproval/prepare-send';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(prepareTransferPreapprovalSendRequest, "PrepareTransferPreapprovalSendRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * As an authenticated user, onboard yourself. Onboarding includes allocating a ledger API user and daml party, and setting up daml contracts required for the user to use a wallet on this validator.  The ledger API user name is taken from the subject claim of the JWT token.  Once this call returns a successful response, the user is fully onboarded. Use [v0/wallet/user-status](../../../../wallet/src/main/openapi/wallet-internal.yaml#/paths/v0/wallet/user-status) to check the status of the user onboarding. 
     * @param body 
     */
    public async register(body?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v0/register';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["userAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Submit a transaction prepared using /v0/admin/external-party/setup-proposal/prepare-accept together with its signature. 
     * @param submitAcceptExternalPartySetupProposalRequest 
     */
    public async submitAcceptExternalPartySetupProposal(submitAcceptExternalPartySetupProposalRequest: SubmitAcceptExternalPartySetupProposalRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'submitAcceptExternalPartySetupProposalRequest' is not null or undefined
        if (submitAcceptExternalPartySetupProposalRequest === null || submitAcceptExternalPartySetupProposalRequest === undefined) {
            throw new RequiredError("ValidatorApi", "submitAcceptExternalPartySetupProposal", "submitAcceptExternalPartySetupProposalRequest");
        }


        // Path Params
        const localVarPath = '/v0/admin/external-party/setup-proposal/submit-accept';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(submitAcceptExternalPartySetupProposalRequest, "SubmitAcceptExternalPartySetupProposalRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Constructs a SignedTopologyTransaction and writes the topology transactions to the authorized store. The input will consist of the unchanged topology transaction and the signed hash from the /v0/external-party-topology/generate endpoint 
     * @param submitExternalPartyTopologyRequest 
     */
    public async submitExternalPartyTopology(submitExternalPartyTopologyRequest: SubmitExternalPartyTopologyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'submitExternalPartyTopologyRequest' is not null or undefined
        if (submitExternalPartyTopologyRequest === null || submitExternalPartyTopologyRequest === undefined) {
            throw new RequiredError("ValidatorApi", "submitExternalPartyTopology", "submitExternalPartyTopologyRequest");
        }


        // Path Params
        const localVarPath = '/v0/admin/external-party/topology/submit';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(submitExternalPartyTopologyRequest, "SubmitExternalPartyTopologyRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Submit transaction generated by /v0/admin/transfer-preapproval/prepare-send together with its signature. Note that this only waits until the TransferCommand is created. The actual transfer will happen afterwards through automation run by the SVs. 
     * @param submitTransferPreapprovalSendRequest 
     */
    public async submitTransferPreapprovalSend(submitTransferPreapprovalSendRequest: SubmitTransferPreapprovalSendRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'submitTransferPreapprovalSendRequest' is not null or undefined
        if (submitTransferPreapprovalSendRequest === null || submitTransferPreapprovalSendRequest === undefined) {
            throw new RequiredError("ValidatorApi", "submitTransferPreapprovalSend", "submitTransferPreapprovalSendRequest");
        }


        // Path Params
        const localVarPath = '/v0/admin/external-party/transfer-preapproval/submit-send';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(submitTransferPreapprovalSendRequest, "SubmitTransferPreapprovalSendRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["adminAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ValidatorApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelTransferPreapprovalByParty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelTransferPreapprovalByPartyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createExternalPartySetupProposal
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createExternalPartySetupProposalWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateExternalPartySetupProposalResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateExternalPartySetupProposalResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateExternalPartySetupProposalResponse", ""
            ) as CreateExternalPartySetupProposalResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "conflict", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not implemented", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateExternalPartySetupProposalResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateExternalPartySetupProposalResponse", ""
            ) as CreateExternalPartySetupProposalResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dumpParticipantIdentities
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dumpParticipantIdentitiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NodeIdentitiesDump >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NodeIdentitiesDump = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NodeIdentitiesDump", ""
            ) as NodeIdentitiesDump;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NodeIdentitiesDump = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NodeIdentitiesDump", ""
            ) as NodeIdentitiesDump;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateExternalPartyTopology
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateExternalPartyTopologyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GenerateExternalPartyTopologyResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenerateExternalPartyTopologyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateExternalPartyTopologyResponse", ""
            ) as GenerateExternalPartyTopologyResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not implemented", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenerateExternalPartyTopologyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateExternalPartyTopologyResponse", ""
            ) as GenerateExternalPartyTopologyResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDecentralizedSynchronizerConnectionConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDecentralizedSynchronizerConnectionConfigWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetDecentralizedSynchronizerConnectionConfigResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetDecentralizedSynchronizerConnectionConfigResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDecentralizedSynchronizerConnectionConfigResponse", ""
            ) as GetDecentralizedSynchronizerConnectionConfigResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetDecentralizedSynchronizerConnectionConfigResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDecentralizedSynchronizerConnectionConfigResponse", ""
            ) as GetDecentralizedSynchronizerConnectionConfigResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getExternalPartyBalance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getExternalPartyBalanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ExternalPartyBalanceResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalPartyBalanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPartyBalanceResponse", ""
            ) as ExternalPartyBalanceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not implemented", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalPartyBalanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPartyBalanceResponse", ""
            ) as ExternalPartyBalanceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidatorDomainDataSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidatorDomainDataSnapshotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetValidatorDomainDataSnapshotResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetValidatorDomainDataSnapshotResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetValidatorDomainDataSnapshotResponse", ""
            ) as GetValidatorDomainDataSnapshotResponse;
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
            const body: GetValidatorDomainDataSnapshotResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetValidatorDomainDataSnapshotResponse", ""
            ) as GetValidatorDomainDataSnapshotResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listExternalPartySetupProposals
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listExternalPartySetupProposalsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListExternalPartySetupProposalsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListExternalPartySetupProposalsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListExternalPartySetupProposalsResponse", ""
            ) as ListExternalPartySetupProposalsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not implemented", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListExternalPartySetupProposalsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListExternalPartySetupProposalsResponse", ""
            ) as ListExternalPartySetupProposalsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTransferPreapprovals
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listTransferPreapprovalsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListTransferPreapprovalsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListTransferPreapprovalsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListTransferPreapprovalsResponse", ""
            ) as ListTransferPreapprovalsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListTransferPreapprovalsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListTransferPreapprovalsResponse", ""
            ) as ListTransferPreapprovalsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listUsersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListUsersResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUsersResponse", ""
            ) as ListUsersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUsersResponse", ""
            ) as ListUsersResponse;
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to offboardUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async offboardUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to onboardUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async onboardUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OnboardUserResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OnboardUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OnboardUserResponse", ""
            ) as OnboardUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OnboardUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OnboardUserResponse", ""
            ) as OnboardUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to prepareAcceptExternalPartySetupProposal
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async prepareAcceptExternalPartySetupProposalWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PrepareAcceptExternalPartySetupProposalResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PrepareAcceptExternalPartySetupProposalResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrepareAcceptExternalPartySetupProposalResponse", ""
            ) as PrepareAcceptExternalPartySetupProposalResponse;
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
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not implemented", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PrepareAcceptExternalPartySetupProposalResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrepareAcceptExternalPartySetupProposalResponse", ""
            ) as PrepareAcceptExternalPartySetupProposalResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to prepareTransferPreapprovalSend
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async prepareTransferPreapprovalSendWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PrepareTransferPreapprovalSendResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PrepareTransferPreapprovalSendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrepareTransferPreapprovalSendResponse", ""
            ) as PrepareTransferPreapprovalSendResponse;
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
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not implemented", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PrepareTransferPreapprovalSendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrepareTransferPreapprovalSendResponse", ""
            ) as PrepareTransferPreapprovalSendResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to register
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async registerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RegistrationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RegistrationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegistrationResponse", ""
            ) as RegistrationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RegistrationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegistrationResponse", ""
            ) as RegistrationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitAcceptExternalPartySetupProposal
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitAcceptExternalPartySetupProposalWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubmitAcceptExternalPartySetupProposalResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubmitAcceptExternalPartySetupProposalResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubmitAcceptExternalPartySetupProposalResponse", ""
            ) as SubmitAcceptExternalPartySetupProposalResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not found", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not implemented", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubmitAcceptExternalPartySetupProposalResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubmitAcceptExternalPartySetupProposalResponse", ""
            ) as SubmitAcceptExternalPartySetupProposalResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitExternalPartyTopology
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitExternalPartyTopologyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubmitExternalPartyTopologyResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubmitExternalPartyTopologyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubmitExternalPartyTopologyResponse", ""
            ) as SubmitExternalPartyTopologyResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not implemented", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubmitExternalPartyTopologyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubmitExternalPartyTopologyResponse", ""
            ) as SubmitExternalPartyTopologyResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitTransferPreapprovalSend
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitTransferPreapprovalSendWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubmitTransferPreapprovalSendResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubmitTransferPreapprovalSendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubmitTransferPreapprovalSendResponse", ""
            ) as SubmitTransferPreapprovalSendResponse;
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
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "not implemented", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubmitTransferPreapprovalSendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubmitTransferPreapprovalSendResponse", ""
            ) as SubmitTransferPreapprovalSendResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
