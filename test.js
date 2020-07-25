'use strict'

const Pbf = require('pbf')
const test = require('tape')
const {VersionTdiArray} = require('./pbf/VersionTdiArray')

const createClient = require('.')
const decodePbfStream = require('./lib/decode-pbf-stream')

const encode = (Message, data) => {
	const pbf = new Pbf()
	Message.write(data, pbf)
	return Buffer.from(pbf.finish())
}

// test('decodePbfStream works', async (t) => {
;(async (t) => {
	const input = [{
		duid: 12345678901234567,
		last_modification_timestamp: 1234567890123,
		is_deleted: false,
		base_version: 123456,
	}, {
		duid: 76543210987654321,
		last_modification_timestamp: 3210987654321,
		is_deleted: true,
		base_version: 654321,
	}]
	// const buf = Buffer.concat([
	// 	encode(VersionTdiArray, input),
	// 	Buffer.alloc(10), // test with additional trailing data
	// ])
	const buf = encode(VersionTdiArray, {versionTdiArray: input})
	console.error(buf.length, buf.toString('hex'))

	// const decode = decodePbfStream(VersionTdiArray.decode)
	// decode.write(buf.slice(0, 4)) // too short chunk
	// decode.write(buf.slice(4, 40)) // chunk crosses boundary of input[0] & input[1]
	// decode.write(buf.slice(40, 50)) // chunk crosses boundary of input[1] & trailing data
	// decode.end(buf.slice(50)) // rest

	// const res = []
	// for await (const val of decode) res.push(val)
	// console.error('res', res)
	// t.deepEqual(res, [
	// 	// todo
	// ])
// })
})()
.catch((err) => {
	console.error(err)
	process.exit(1)
})
