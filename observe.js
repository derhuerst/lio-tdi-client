'use strict'

const observeEndpoint = (client, opt = {}, cb) => {
	if ('function' === typeof opt) {
		cb = opt
		opt = {}
	}
	const {
		minInterval,
		factor,
		maxInterval,
	} = {
		minInterval: 1 * 1000, // 1s
		factor: 2,
		maxInterval: 15 * 1000, // 15s
		...opt,
	}

	let lastVersion = null
	let attemptsSinceVersionChange = 0
	let timer = null

	const check = () => {
		const onSuccess = (version) => {
			if (version !== lastVersion) {
				attemptsSinceVersionChange = 0
				lastVersion = version
				cb(null, version)
			}
		}

		client.version()
		.then(onSuccess, cb)
		.then(scheduleNextCheck)
		.catch(cb)
	}

	const scheduleNextCheck = () => {
		const attempt = attemptsSinceVersionChange++
		const random = Math.random() * 300
		const delay = Math.round(Math.min(
			random + minInterval * Math.pow(factor, attempt),
			maxInterval
		))
		timer = setTimeout(check, delay)
	}
	scheduleNextCheck()

	const stopObserving = () => {
		if (timer !== null) {
			clearTimeout(timer)
			timer = null
		}
	}
	return stopObserving
}

module.exports = observeEndpoint
