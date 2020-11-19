// Mock schema for tests
// make one schema that tests every single type

export const mockSchema = [

  {
    "name":"TestJSONURI",
    "key": "0xdf73948b014092c0ce1654e869800d78f6a16f50f1734073f9290553cbf1122c",
    "keyType": "Singleton",
    "valueContent": "JSONURI",
    "valueType": "bytes",
    // Testing data
    "returnRawData": "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000059b7845733733e78f2fc4a3304c141e8424d02c9069fe08950c6514b27289ead8ef4faa49d697066733a2f2f516d6245724b6833466a73415236596a73546a485a4e6d364d6344703661527438324674637639414a4a765a626400000000000000",
    "returnGraphData": "0xb7845733733e78f2fc4a3304c141e8424d02c9069fe08950c6514b27289ead8ef4faa49d697066733a2f2f516d6245724b6833466a73415236596a73546a485a4e6d364d6344703661527438324674637639414a4a765a6264",
    "expectedResult": {
      "hashFunction": "keccak256",
      "jsonHash": "0x733e78f2fc4a3304c141e8424d02c9069fe08950c6514b27289ead8ef4faa49d", // hash of stringified json
      "jsonURI": "ipfs://QmbErKh3FjsAR6YjsTjHZNm6McDp6aRt82Ftcv9AJJvZbd" // same JSON uri from LSP3Profile below
    }
  },
  {
    "name": "TestHashedAssetURI",
    "key": "0xbb6581e5ed9fe56d79ca6dd876c902603912b84206c2991615ee20c2d73bccc7",
    "keyType": "Singleton",
    "valueContent": "HashedAssetURI",
    "valueType": "bytes",
    // Testing data
    "returnRawData": "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000059b7845733a7d9a84b44013f71356d72e6c15fdc2533c573271c53d053ed8ddcdaa60f4c81697066733a2f2f516d6245724b6833466a73415236596a73546a485a4e6d364d6344703661527438324674637639414a4a765a626400000000000000",
    "returnGraphData":"0xb7845733a7d9a84b44013f71356d72e6c15fdc2533c573271c53d053ed8ddcdaa60f4c81697066733a2f2f516d6245724b6833466a73415236596a73546a485a4e6d364d6344703661527438324674637639414a4a765a6264",
    "expectedResult": {
      "hashFunction": "keccak256",
      "assetHash": "0xa7d9a84b44013f71356d72e6c15fdc2533c573271c53d053ed8ddcdaa60f4c81", // hash of address '0x0c03fba782b07bcf810deb3b7f0595024a444f4e'
      "assetURI": "ipfs://QmbErKh3FjsAR6YjsTjHZNm6McDp6aRt82Ftcv9AJJvZbd" // FAKE. just used from above
    }
  },

  {
    "name": "TestKeccak256",
    "key": "0xd6c7198ea09a1d3357688e1dbdf0e07f6cfaf94359e0a4fc11e4f5f1d59d54f4",
    "keyType": "Singleton",
    "valueContent": "Keccak256",
    "valueType": "bytes32",
    // Testing data
    "returnRawData": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000204d75a97aff0964309140e9821514861e5ddcc827113b70a2b69db16dde0695dc", // this is bytes
    "returnGraphData": "0x4d75a97aff0964309140e9821514861e5ddcc827113b70a2b69db16dde0695dc",
    "expectedResult": "0x4d75a97aff0964309140e9821514861e5ddcc827113b70a2b69db16dde0695dc", // 'mytestdata'

  },

  {
    "name": "TestAddress",
    "key": "0x7bf6ecfbf659a88c662d7f099c14e468610f786f6e29f0d346e44f772ef0d187",
    "keyType": "Singleton",
    "valueContent": "Address",
    "valueType": "bytes",
    // Testing data
    "returnRawData": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000140c03fba782b07bcf810deb3b7f0595024a444f4e000000000000000000000000",
    "returnGraphData": "0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e",
    "expectedResult": "0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e" // a real address
  },

  {
    "name": "TestMarkdown",
    "key": "0x328f991bde3a9d8c548b7b2dbc303a362202dddbcd33219650d85bedcd75ac9b",
    "keyType": "Singleton",
    "valueContent": "Markdown",
    "valueType": "bytes",
    // Testing data
    "returnRawData": "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000033232054657374696e67206d61726b646f776e2e200a2057656c636f6d6520746f206d61726b646f776e202a2a746573742a2a2e00000000000000000000000000",
    "returnGraphData": "0x232054657374696e67206d61726b646f776e2e200a2057656c636f6d6520746f206d61726b646f776e202a2a746573742a2a2e",
    "expectedResult": "# Testing markdown. \n Welcome to markdown **test**."
  },


  // Real data from testnet
  {
    "name": "LSP3Name",
    "key": "0xa5f15b1fa920bbdbc28f5d785e5224e3a66eb5f7d4092dc9ba82d5e5ae3abc87",
    "keyType": "Singleton",
    "valueContent": "String",
    "valueType": "bytes",
    // Testing data
    "ethereumCallSig": "0x54f6127fa5f15b1fa920bbdbc28f5d785e5224e3a66eb5f7d4092dc9ba82d5e5ae3abc87",
    "returnRawData": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000107061747269636b2d6d63646f77656c6c00000000000000000000000000000000",
    "returnGraphData": "0x7061747269636b2d6d63646f77656c6c",
    "expectedResult": "patrick-mcdowell"
  },
  
  {
    "name": "LSP3Profile",
    "key": "0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",
    "keyType": "Singleton",
    "valueContent": "URI",
    "valueType": "bytes",
    // testing data
    "ethereumCallSig": "0x54f6127f5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5", // remove this
    "returnRawData": "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000035697066733a2f2f516d6245724b6833466a73415236596a73546a485a4e6d364d6344703661527438324674637639414a4a765a62640000000000000000000000",
    "returnGraphData": "0x697066733a2f2f516d6245724b6833466a73415236596a73546a485a4e6d364d6344703661527438324674637639414a4a765a6264",
    "expectedResult": "ipfs://QmbErKh3FjsAR6YjsTjHZNm6McDp6aRt82Ftcv9AJJvZbd"
  },
  {
    "name": "LSP3IssuedAssets[]",
    "key": "0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0",
    "keyType": "Array",
    "valueContent": "Number",
    "valueType": "uint256",
    "elementKey": "0x3a47ab5bd3a594c3a8995f8fa58d0876",
    "elementKeyType": "ArrayElement",
    "elementValueContent": "Address",
    "elementValueType": "address",
    // testing data
    // the full array of values
    "returnRawData": [
      "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002", // array length
      "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000014c444009d38d3046bb0cf81fa2cd295ce46a67c78000000000000000000000000",
      "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000144febc3491230571f6e1829e46602e3b110215a2e000000000000000000000000",
    ],
    "returnGraphData": [
      "0x0000000000000000000000000000000000000000000000000000000000000002", // array length
      "0xc444009d38d3046bb0cF81Fa2Cd295ce46A67C78",
      "0x4fEbC3491230571F6e1829E46602e3b110215A2E",
    ],
    "expectedResult" :[
      "0xc444009d38d3046bb0cF81Fa2Cd295ce46A67C78",
      "0x4fEbC3491230571F6e1829E46602e3b110215A2E",
    ]

  },
  {
    "name": "TestObjArray[]",
    "key": "0x9985edaf12cbacf5ac7d6ed54f0445cc0ea56075aee9b9942e4ab3bf4239f950",
    "keyType": "Array",
    "valueContent": "Number", // Array length
    "valueType": "uint256",
    "elementKey": "0x9985edaf12cbacf5ac7d6ed54f0445cc",
    "elementKeyType": "ArrayElement",
    "elementValueContent": "JSONURI",
    "elementValueType": "bytes",
    // testing data
    // the full array of values
    "returnRawData": [
      "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002", // array length
      "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000059b7845733733e78f2fc4a3304c141e8424d02c9069fe08950c6514b27289ead8ef4faa49d697066733a2f2f516d6245724b6833466a73415236596a73546a485a4e6d364d6344703661527438324674637639414a4a765a626400000000000000",
      "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000059b784573381bd0b7ed5ac354abbf24619ce16933f00a4bdfa8fcaf3791d25f69b497abf88697066733a2f2f516d6245724b6833466a7378787878787878787878787878787878787878787878787878787639414a4a765a626400000000000000",
    ],
    "returnGraphData": [
      "0x0000000000000000000000000000000000000000000000000000000000000002", // array length
      "0xb7845733733e78f2fc4a3304c141e8424d02c9069fe08950c6514b27289ead8ef4faa49d697066733a2f2f516d6245724b6833466a73415236596a73546a485a4e6d364d6344703661527438324674637639414a4a765a6264",
      "0xb784573381bd0b7ed5ac354abbf24619ce16933f00a4bdfa8fcaf3791d25f69b497abf88697066733a2f2f516d6245724b6833466a7378787878787878787878787878787878787878787878787878787639414a4a765a6264",
    ],
    "expectedResult": [
      // This JSON from JSONURI above...
      {
        "hashFunction": "keccak256",
        "jsonHash": "0x733e78f2fc4a3304c141e8424d02c9069fe08950c6514b27289ead8ef4faa49d", // hash of stringified json
        "jsonURI": "ipfs://QmbErKh3FjsAR6YjsTjHZNm6McDp6aRt82Ftcv9AJJvZbd" // same JSON uri from LSP3Profile below
      },
      // this JSON hash is = {"test1":"value1","test2":"value2","test3":"value3"}
      {
        "hashFunction": "keccak256",
        "jsonHash": "0x81bd0b7ed5ac354abbf24619ce16933f00a4bdfa8fcaf3791d25f69b497abf88", // hash of stringified json
        "jsonURI": "ipfs://QmbErKh3Fjsxxxxxxxxxxxxxxxxxxxxxxxxxxv9AJJvZbd" // dummy uri
      }
    ]

  },
  // Testing other valueTypes (than bytes) 
  {
    "name": "TestStringValueType",
    "key": "0xc0929170bbaeb216f869c80a5c937f7a1c887a5a92262dac50313aef131f0c03",
    "keyType": "Singleton",
    "valueContent": "String",
    "valueType": "string",
    // Test data
    // "returnRawData": "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001d47726561742073636f7474212049742773206120737472696e672e2e2e000000",
    "returnRawData": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001d47726561742073636f7474212049742773206120737472696e672e2e2e000000",
    "returnGraphData":"0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001d47726561742073636f7474212049742773206120737472696e672e2e2e000000",
    // "returnGraphData": "0x47726561742073636f7474212049742773206120737472696e672e2e2e",
    "expectedResult": "Great scott! It's a string..."
  },
  {
    "name": "TestUintValueType",
    "key": "0x61529294800f5739edc21a6cf8ba1bad3fd3e11d03d2ab5219ce9c0131b93f93",
    "keyType": "Singleton",
    "valueContent": "Number",
    "valueType": "uint256",
    // Test data
    "returnRawData": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000063",
    "returnGraphData":"0x0000000000000000000000000000000000000000000000000000000000000063",
    "expectedResult": "99" // TODO: BUG: This should not need to be string to work?
  },
  {
    "name": "TestNumberWithBytesValueType",
    "key": "0x64a44e72c25d95851b1d449428d8d27093b2ef3e0b36a2b3497ae17edf979e61",
    "keyType": "Singleton",
    "valueContent": "Number",
    "valueType": "bytes",
    // Test data
    "returnRawData": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000063",
    "returnGraphData":"0x0000000000000000000000000000000000000000000000000000000000000063",
    "expectedResult": 99
  },
  {
    "name": "TestStringWithBytesValueType",
    "key": "0x3ef4d417afa66557c9e1463723b391a518eee0c61d29be4e10882999c7848041",
    "keyType": "Singleton",
    "valueContent": "String",
    "valueType": "bytes",
    // Test data
    "returnRawData": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000264f6b2074686973206973206120737472696e672073746f7265642061732062797465732e2e2e0000000000000000000000000000000000000000000000000000",
    "returnGraphData":"0x4f6b2074686973206973206120737472696e672073746f7265642061732062797465732e2e2e",
    "expectedResult": "Ok this is a string stored as bytes..."
  },
  // Testing array valueTypes
  // {
  //   "name": "TestStringValueTypeArray",
  //   "key": "0xd7a8f1af4a0d9de8d17c177ff06f1689c0c3f1310edbbe53733da0b084ccff18",
  //   "keyType": "Singleton",
  //   "valueContent": "String",
  //   "valueType": "string[]",
  //   // Testing fields
  //   "returnRawData": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000b6170706c65207361756365000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e62757474657220636869636b656e000000000000000000000000000000000000",
  //   "returnGraphData": "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000b6170706c65207361756365000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e62757474657220636869636b656e000000000000000000000000000000000000",
  //   "expectedResult": [
  //     "apple sauce",
  //     "butter chicken"
  //   ]
  // },
]