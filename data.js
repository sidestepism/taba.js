
var data = [];
for(var i = 0; i < 10000; i ++){
	data.push({"time": i + 10000, "accels": {
		"x": Math.sin(Math.floor(i / 100)) * Math.random() * 0.1
		"y": Math.cos(Math.floor(i / 100)) * Math.random() * 0.1
		"z": Math.random() * 0.2
	}})
}

module.exports = data;