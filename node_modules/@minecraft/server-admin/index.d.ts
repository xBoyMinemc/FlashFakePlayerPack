// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @packageDocumentation
 * Contains types related to administering a Bedrock Dedicated
 * Server. These types allow for the configuration of variables
 * and secrets in JSON files in the Bedrock Dedicated Server
 * folder. These types cannot be used on Minecraft clients.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-admin",
 *   "version": "1.0.0-beta.11940b24"
 * }
 * ```
 *
 */
/**
 * This represents a placeholder object that represents a
 * secret string. The contents of that string are not available
 * to script; this object is just a placeholder.
 */
// tslint:disable-next-line:no-unnecessary-class
export class SecretString {
    constructor(value: string);
}
/**
 * A collection of server secrets defined in dedicated server
 * configuration.
 */
export class ServerSecrets {
    /**
     * A list of available, configured server secrets.
     */
    readonly names: string[];
    /**
     * @remarks
     * Returns a SecretString that is a placeholder for a secret
     * configured in a JSON file. In certain objects, like an
     * HttpHeader, this Secret is resolved at the time of execution
     * but is not made available to the script environment.
     * @param name
     */
    get(name: string): SecretString;
    protected constructor();
}
/**
 * A collection of server variables defined in dedicated server
 * configuration.
 */
export class ServerVariables {
    /**
     * A list of available, configured server variables.
     */
    readonly names: string[];
    /**
     * @remarks
     * Returns the value of variable that has been configured in a
     * dedicated server configuration JSON file.
     * @param name
     */
    get(name: string): any;
    protected constructor();
}
/**
 * A globally available object that returns a list of
 * dedicated-server configured secrets.
 */
export const secrets: ServerSecrets;
/**
 * A globally available object that returns a list of
 * dedicated-server configured variables.
 */
export const variables: ServerVariables;
