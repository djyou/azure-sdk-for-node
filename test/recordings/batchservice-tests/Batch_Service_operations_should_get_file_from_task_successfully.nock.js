// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stdout.txt?api-version=2015-12-01.2.2')
  .reply(200, "hello world\r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Sun, 20 Mar 2016 22:01:49 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c003865e-c717-4260-a98e-b4b3a659716b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Sun, 20 Mar 2016 22:01:49 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fbatchtestnodesdk.japaneast.batch.azure.com%2Fjobs%2FHelloWorldJobNodeSDKTest%2Ftasks%2FHelloWorldNodeSDKTestTask2%2Ffiles%2Fstderr.txt',
  date: 'Sun, 20 Mar 2016 22:03:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stdout.txt?api-version=2015-12-01.2.2')
  .reply(200, "hello world\r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Sun, 20 Mar 2016 22:01:49 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c003865e-c717-4260-a98e-b4b3a659716b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Sun, 20 Mar 2016 22:01:49 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fbatchtestnodesdk.japaneast.batch.azure.com%2Fjobs%2FHelloWorldJobNodeSDKTest%2Ftasks%2FHelloWorldNodeSDKTestTask2%2Ffiles%2Fstderr.txt',
  date: 'Sun, 20 Mar 2016 22:03:33 GMT',
  connection: 'close' });
 return result; }]];