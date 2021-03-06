/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The event response message received from the service URI.
 *
 */
class EventResponseMessage {
  /**
   * Create a EventResponseMessage.
   * @member {string} [content] The content of the event response message.
   * @member {object} [headers] The headers of the event response message.
   * @member {string} [reasonPhrase] The reason phrase of the event response
   * message.
   * @member {string} [statusCode] The status code of the event response
   * message.
   * @member {string} [version] The HTTP message version.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventResponseMessage
   *
   * @returns {object} metadata of EventResponseMessage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventResponseMessage',
      type: {
        name: 'Composite',
        className: 'EventResponseMessage',
        modelProperties: {
          content: {
            required: false,
            serializedName: 'content',
            type: {
              name: 'String'
            }
          },
          headers: {
            required: false,
            serializedName: 'headers',
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
          reasonPhrase: {
            required: false,
            serializedName: 'reasonPhrase',
            type: {
              name: 'String'
            }
          },
          statusCode: {
            required: false,
            serializedName: 'statusCode',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EventResponseMessage;
