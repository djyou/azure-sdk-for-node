/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Managed cluster.
 *
 * @extends models['Resource']
 */
class ManagedCluster extends models['Resource'] {
  /**
   * Create a ManagedCluster.
   * @member {string} [provisioningState] The current deployment or
   * provisioning state, which only appears in the response.
   * @member {string} [dnsPrefix] DNS prefix specified when creating the
   * managed cluster.
   * @member {string} [fqdn] FDQN for the master pool.
   * @member {string} [kubernetesVersion] Version of Kubernetes specified when
   * creating the managed cluster.
   * @member {array} [agentPoolProfiles] Properties of the agent pool.
   * @member {object} [linuxProfile] Profile for Linux VMs in the container
   * service cluster.
   * @member {string} [linuxProfile.adminUsername] The administrator username
   * to use for Linux VMs.
   * @member {object} [linuxProfile.ssh] SSH configuration for Linux-based VMs
   * running on Azure.
   * @member {array} [linuxProfile.ssh.publicKeys] The list of SSH public keys
   * used to authenticate with Linux-based VMs. Only expect one key specified.
   * @member {object} [servicePrincipalProfile] Information about a service
   * principal identity for the cluster to use for manipulating Azure APIs.
   * Either secret or keyVaultSecretRef must be specified.
   * @member {string} [servicePrincipalProfile.clientId] The ID for the service
   * principal.
   * @member {string} [servicePrincipalProfile.secret] The secret password
   * associated with the service principal in plain text.
   * @member {object} [servicePrincipalProfile.keyVaultSecretRef] Reference to
   * a secret stored in Azure Key Vault.
   * @member {string} [servicePrincipalProfile.keyVaultSecretRef.vaultID] Key
   * vault identifier.
   * @member {string} [servicePrincipalProfile.keyVaultSecretRef.secretName]
   * The secret name.
   * @member {string} [servicePrincipalProfile.keyVaultSecretRef.version] The
   * secret version.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ManagedCluster
   *
   * @returns {object} metadata of ManagedCluster
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ManagedCluster',
      type: {
        name: 'Composite',
        className: 'ManagedCluster',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          dnsPrefix: {
            required: false,
            serializedName: 'properties.dnsPrefix',
            type: {
              name: 'String'
            }
          },
          fqdn: {
            required: false,
            readOnly: true,
            serializedName: 'properties.fqdn',
            type: {
              name: 'String'
            }
          },
          kubernetesVersion: {
            required: false,
            serializedName: 'properties.kubernetesVersion',
            type: {
              name: 'String'
            }
          },
          agentPoolProfiles: {
            required: false,
            serializedName: 'properties.agentPoolProfiles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ContainerServiceAgentPoolProfileElementType',
                  type: {
                    name: 'Composite',
                    className: 'ContainerServiceAgentPoolProfile'
                  }
              }
            }
          },
          linuxProfile: {
            required: false,
            serializedName: 'properties.linuxProfile',
            type: {
              name: 'Composite',
              className: 'ContainerServiceLinuxProfile'
            }
          },
          servicePrincipalProfile: {
            required: false,
            serializedName: 'properties.servicePrincipalProfile',
            type: {
              name: 'Composite',
              className: 'ContainerServiceServicePrincipalProfile'
            }
          }
        }
      }
    };
  }
}

module.exports = ManagedCluster;