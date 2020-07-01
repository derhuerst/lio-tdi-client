'use strict'

const Pbf = require('pbf')
const request = require('./lib/request')

const {VersionTdiArray} = require('./pbf/VersionTdiArray')

const createClient = (baseUrl) => {
	return {
		version: async () => {
			const buf = await request(baseUrl + 'VersionTDI', true)
			const pbf = new Pbf(buf)
			const res = VersionTdiArray.read(pbf).versionTdiArray[0]
			// if the base_version attribute is non-existent or has the value
			// 0, the LIO backend is probably just in the process of loading
			// new data, try again later
			return res.base_version === 0 ? null : res.base_version
		},

		stops: async () => {
			return await request(baseUrl + 'StopTDI')
		},
		stopPoints: async () => {
			return await request(baseUrl + 'StopPointTDI')
		},
		routes: async () => {
			return await request(baseUrl + 'RouteTDI')
		},
		patterns: async () => {
			return await request(baseUrl + 'PatternTDI')
		},
		stopPassages: async () => {
			return await request(baseUrl + 'StopPassageTDI')
		},
		vehicles: async () => {
			return await request(baseUrl + 'VehicleTDI')
		},
		passengerAlerts: async () => {
			return await request(baseUrl + 'PassengerAlertTDI')
		},
	}
}

module.exports = createClient
