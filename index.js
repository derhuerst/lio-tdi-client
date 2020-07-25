'use strict'

const request = require('./lib/request')

const {
	VersionTdiArray,
} = require('./pbf').mhcc.app.dataprovider.model.tdiinterface.dstructs

const createClient = (baseUrl) => {
	return {
		version: async () => {
			const buf = await request(baseUrl + 'VersionTDI', true)
			const res = VersionTdiArray.decode(buf)
			const version = +res.versionTdiArray[0].baseVersion
			// if the base_version attribute is non-existent or has the value
			// 0, the LIO backend is probably just in the process of loading
			// new data, try again later
			return version === 0 ? null : version
		},

		stops: async (opt = {}) => {
			return await request(baseUrl + 'StopTDI', !!opt.asBuffer)
		},
		stopPoints: async (opt = {}) => {
			return await request(baseUrl + 'StopPointTDI', !!opt.asBuffer)
		},
		routes: async (opt = {}) => {
			return await request(baseUrl + 'RouteTDI', !!opt.asBuffer)
		},
		patterns: async (opt = {}) => {
			return await request(baseUrl + 'PatternTDI', !!opt.asBuffer)
		},
		stopPassages: async (opt = {}) => {
			return await request(baseUrl + 'StopPassageTDI', !!opt.asBuffer)
		},
		vehicles: async (opt = {}) => {
			return await request(baseUrl + 'VehicleTDI', !!opt.asBuffer)
		},
		passengerAlerts: async (opt = {}) => {
			return await request(baseUrl + 'PassengerAlertTDI', !!opt.asBuffer)
		},
	}
}

module.exports = createClient
