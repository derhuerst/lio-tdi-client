'use strict'

const {fetch} = require('fetch-ponyfill')()
const {parse: parseContentType} = require('content-type')

const request = async (url, asBuffer = false) => {
	const res = await fetch(url, {
		headers: {
			accept: 'application/x-protobuf',
			'accept-encoding': 'gzip',
		},
		redirect: 'follow',
	})

	// validate response
	if (!res.ok) {
		const err = new Error(res.statusText || 'unknown error')
		err.statusCode = res.status
		throw err
	}
	const cType = parseContentType(res.headers.get('content-type'))
	if (cType.type !== 'application/x-protobuf') {
		const err = new Error('unexpected content-type: ' + cType.type)
		err.statusCode = res.status
		throw err
	}
	if (
		cType.parameters && cType.parameters.charset &&
		cType.parameters.charset !== 'UTF-8'
	) {
		const err = new Error('unexpected charset: ' + cType.parameters.charset)
		err.statusCode = res.status
		throw err
	}

	if (asBuffer) return await res.buffer()
	return res.body
}

module.exports = request
