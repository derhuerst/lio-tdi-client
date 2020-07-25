'use strict'

const Pbf = require('pbf')
const {Transform} = require('stream')

const decodePbfStream = (decode) => {
	let oldBuf = null

	const transform = (buf, _, cb) => {
		// there is one root-level protobuf message, with many children
		// todo: read *children* in a streaming/iterative way

		// console.error('buf', buf, 'oldBuf', oldBuf)
		// try {
		// 	if (oldBuf !== null) buf = Buffer.concat([oldBuf, buf])
		// 	console.error('buf', buf.length, buf)
		// 	const pbf = new Pbf(buf)
		// 	const val = decode(pbf)
		// 	console.error('pbf.pos', pbf.pos)
		// 	offset += pbf.pos
		// 	out.push(val)
		// } catch (err) {
		// 	// "decoded message is not valid" probably means that we don't have enough bytes yet, silence err
		// 	if (!err || !err.message || err.message.toLowerCase() !== 'decoded message is not valid') {
		// 		throw err
		// 	}
		// }
		cb()
	}

	const final = (cb) => {
		cb() // todo
	}

	const out = new Transform({
		objectMode: true,
		transform,
		final,
	})
	return out
}

module.exports = decodePbfStream
