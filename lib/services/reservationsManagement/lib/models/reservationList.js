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

/**
 * Class representing a ReservationList.
 */
class ReservationList extends Array {
  /**
   * Create a ReservationList.
   * @member {string} [nextLink] Url to get the next page of reservations.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ReservationList
   *
   * @returns {object} metadata of ReservationList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReservationList',
      type: {
        name: 'Composite',
        className: 'ReservationList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReservationResponseElementType',
                  type: {
                    name: 'Composite',
                    className: 'ReservationResponse'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ReservationList;