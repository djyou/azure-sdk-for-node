// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobschedules/NodeSDKTestSchedule/enable?api-version=2015-12-01.2.2')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Sun, 20 Mar 2016 22:05:32 GMT',
  etag: '0x8D3510BC1CFA767',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '63f00e6a-2afd-4db0-862b-8dd8c532df42',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule/enable',
  date: 'Sun, 20 Mar 2016 22:05:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobschedules/NodeSDKTestSchedule/enable?api-version=2015-12-01.2.2')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Sun, 20 Mar 2016 22:05:32 GMT',
  etag: '0x8D3510BC1CFA767',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '63f00e6a-2afd-4db0-862b-8dd8c532df42',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule/enable',
  date: 'Sun, 20 Mar 2016 22:05:32 GMT',
  connection: 'close' });
 return result; }]];