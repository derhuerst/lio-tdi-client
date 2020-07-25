# lio-tdi-client

**A client for [LIO](https://www.trapezegroup.de/de/linienverkehr/details/betriebsleitsystem-itcs) Traveller Data Interface (TDI) endpoints with caching support.**

[![npm version](https://img.shields.io/npm/v/lio-tdi-client.svg)](https://www.npmjs.com/package/lio-tdi-client)
[![build status](https://api.travis-ci.org/derhuerst/lio-tdi-client.svg?branch=master)](https://travis-ci.org/derhuerst/lio-tdi-client)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/lio-tdi-client.svg)
![minimum Node.js version](https://img.shields.io/node/v/lio-tdi-client.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)


## Installation

```shell
npm install lio-tdi-client
```


## Usage

```js
// create a client
const createLioTdiClient = require('lio-tdi-client')
const endpoint = 'https://tdi.swu.de/tdinterface/'
const client = createLioTdiClient(endpoint)

// fetch stops as Buffer
const stopsBuf = await client.stops({asBuffer: true})

// decode stops Buffer
const {StopTdiArray} = require('lio-tdi-client/pbf').mhcc.app.dataprovider.model.tdiinterface.dstructs
console.log(StopTdiArray.decode(pbf, stopsBuf))
```

```js
{
	stopTdiArray: [
		{
			duid: {low: 798, high: 14164742, unsigned: false},
			lastModificationTimestamp: {low: 2034426655, high: 371, unsigned: false},
			isDeleted: false,
			number: {low: 2871, high: 0, unsigned: true},
			shortName: 'GZAW',
			longName: 'Günzburg Abz Wasserburg',
			latitude: 174435185,
			longitude: 36965635,
			altitude: {low: 2147483646, high: 0, unsigned: true},
		},
		{
			duid: {low: 799, high: 14164742, unsigned: false},
			lastModificationTimestamp: {low: 2034426655, high: 371, unsigned: false},
			isDeleted: false,
			number: {low: 3466, high: 0, unsigned: true},
			shortName: 'LEBS',
			longName: 'Leipheim Bahnhofstraße',
			latitude: 174416238,
			longitude: 36784764,
			altitude: {low: 2147483646, high: 0, unsigned: true},
		},
		// …
	]
}
```


## Contributing

If you have a question or need support using `lio-tdi-client`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, use [the issues page](https://github.com/derhuerst/lio-tdi-client/issues).
