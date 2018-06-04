let mongoose = require('mongoose'),
	Shotgun = mongoose.model('Shotguns');

// checks room isn't part of any shotgun already
exports.checkRoomNotShotgun = (roomId, callback) => {
	console.log("Check room " + roomId + " not shotgun...");
	Shotgun.findOne({ room: roomId }, function (err, foundShotgun) {
		if (err) return callback(err);
		if (foundShotgun) {
			console.error("-> Room " + roomId + " already shotgun.");
			let error = new Error('Room with id ' + roomId + ' already shotgun.');
			error.name = "Error 400 : Query parameter error";
			error.httpStatusCode = "400";
			return callback(error);
		}
		else {
			console.log("... Room " + roomId + " not shotgun.");
			return callback();
		}
	});
}

// retrive shotgun by roomId
exports.findShotgun = (roomId, callback) => {
	console.log("Find shotgun...")
	// Find shotgun
	Shotgun.findOne({ room: roomId }, function (err, shotgun) {
		if (err) return callback(err);
		if (!shotgun) {
			console.error("-> Shotgun with roomId " + roomId + " not found.");
			let error = new Error("Shotgun not found with roomId " + roomId);
			error.name = "Error 404 : Not found";
			error.httpStatusCode = "404";
			return callback(error);
		}
		console.log("... Shotgun found.");
		callback(null, shotgun);
	})
}