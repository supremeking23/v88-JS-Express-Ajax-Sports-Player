module.exports = (app) => {
	const user = require("./controllers/users");

	app.get("/", user.index);
	app.post("/filter-by-name", user.filter_name_ajax);
	app.post("/filter-by-gender", user.filter_gender_ajax);
	app.post("/filter-by-sports", user.filter_sports_ajax);

	// APP.get("/register-and-login", user.register);
};
