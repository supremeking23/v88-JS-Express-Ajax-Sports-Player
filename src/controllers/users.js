const userModel = require("../models/user");
const sportModel = require("../models/sport");
const { validateEmail, formError, messageHandler } = require("../my_module/utilities")();
const { registrationValidation, loginValidation } = require("../my_module/validation")();
const bcrypt = require("bcrypt");
const saltRounds = 10;

const redis = require("redis");
const user = require("../models/user");
const { json } = require("body-parser");
const client = redis.createClient(6379); //port number is optional

client.on("connect", function () {
	console.log("Connected to Redis...");
});

client.on("error", function (error) {
	console.error(error);
});

class Users {
	constructor() {}

	async index(req, res) {
		try {
			let players = await userModel.getAllPlayers();
			let sports = await sportModel.getAllSports();

			res.render("index", { players, sports });
			req.session.destroy();
		} catch (error) {
			console.log(error);
		}
	}

	async filter_name_ajax(req, res) {
		// console.log(req.body);

		try {
			let players = await userModel.filter_name(req.body.name);
			res.json({ data: players });
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new Users();
