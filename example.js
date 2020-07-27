'use strict'

const createClient = require('.')
const observe = require('./observe')

const {
	StopTdiArray,
} = require('./pbf').mhcc.app.dataprovider.model.tdiinterface.dstructs

const client = createClient('https://tdi.swu.de/tdinterface/')

;(async () => {
	console.log('version', await client.version())

	const stopsBuf = await client.stops({asBuffer: true})
	console.log(StopTdiArray.decode(stopsBuf))

	observe(client, (err, version) => {
		if (err) console.error(err)
		else console.log('version', version)
	})
})()
.catch((err) => {
	console.error(err)
	process.exit(1)
})
