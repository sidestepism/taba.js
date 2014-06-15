/**
 * taba.js
 * data binding tool for machine learning
 */

var Taba = function() {
	this.streams = {};
}

Taba.prototype.appendCategory = function(type, data) {
	this.streams.push({
		"type": type,
		"data": data
	});	
}

module.exports = Taba