function isValidIP(str) {
	const netModule = require('net');
	return netModule.isIPv4(str);
}