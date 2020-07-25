'use strict'

const createClient = require('.')

const client = createClient('https://tdi.swu.de/tdinterface/')

;(async () => {
	console.log('version', await client.version())

	// const stops = await client.stops()
	// stops.pipe(process.stdout)
	// todo
})()
.catch((err) => {
	console.error(err)
	process.exit(1)
})
