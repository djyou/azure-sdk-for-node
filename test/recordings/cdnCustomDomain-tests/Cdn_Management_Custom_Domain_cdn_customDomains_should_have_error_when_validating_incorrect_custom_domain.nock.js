// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup5157/providers/Microsoft.Cdn/profiles/cdnTestProfile6002/endpoints/testEndpoint-06466c93-ab2d-4268-b3ec-38bbc2a12e90/validateCustomDomain?api-version=2016-04-02', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"HostName \\\"??sdk-3-6029da3a-835e-4506-b4ea-bd5375165cdf??\\\" is invalid. It must be a valid domain name, IP version 4, or IP version 6.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '54e78939-242b-4750-bb71-01ec4edbb370',
  'x-ms-client-request-id': '5578baa8-e154-4a1b-8f70-45149d5e2edf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '5e61ef5a-c70e-48a0-9764-99d8c3c983b6',
  'x-ms-routing-request-id': 'WESTUS:20160511T231957Z:5e61ef5a-c70e-48a0-9764-99d8c3c983b6',
  date: 'Wed, 11 May 2016 23:19:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup5157/providers/Microsoft.Cdn/profiles/cdnTestProfile6002/endpoints/testEndpoint-06466c93-ab2d-4268-b3ec-38bbc2a12e90/validateCustomDomain?api-version=2016-04-02', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"HostName \\\"??sdk-3-6029da3a-835e-4506-b4ea-bd5375165cdf??\\\" is invalid. It must be a valid domain name, IP version 4, or IP version 6.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '54e78939-242b-4750-bb71-01ec4edbb370',
  'x-ms-client-request-id': '5578baa8-e154-4a1b-8f70-45149d5e2edf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '5e61ef5a-c70e-48a0-9764-99d8c3c983b6',
  'x-ms-routing-request-id': 'WESTUS:20160511T231957Z:5e61ef5a-c70e-48a0-9764-99d8c3c983b6',
  date: 'Wed, 11 May 2016 23:19:56 GMT',
  connection: 'close' });
 return result; }]];