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
 * The list of applications in the cluster. The list is paged when all of the
 * results cannot fit in a single message. The next set of results can be
 * obtained by executing the same query with the continuation token provided in
 * this list.
 *
 */
class PagedApplicationInfoList {
  /**
   * Create a PagedApplicationInfoList.
   * @member {string} [continuationToken]
   * @member {array} [items]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PagedApplicationInfoList
   *
   * @returns {object} metadata of PagedApplicationInfoList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PagedApplicationInfoList',
      type: {
        name: 'Composite',
        className: 'PagedApplicationInfoList',
        modelProperties: {
          continuationToken: {
            required: false,
            serializedName: 'ContinuationToken',
            type: {
              name: 'String'
            }
          },
          items: {
            required: false,
            serializedName: 'Items',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationInfo'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PagedApplicationInfoList;
