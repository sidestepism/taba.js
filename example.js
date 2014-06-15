var taba = require("index").taba();

taba.appendStream("accel", require("data"));

taba.appendCategory("action", 
	[
		{"time": 0, "action": "standing"},
		{"time": 2000, "action": "running"},
		{"time": 3800, "action": "talking"},
		{"time": 6500, "action": "walking"},
		{"time": 8000, "action": "sleeping"}
	]
);


var svm = taba.runSVM("accel", "action");

var action = svm.get({
	"x": 0.1
	"y": 0.2
	"z": 0.1
})