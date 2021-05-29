module.exports = (app) => {
	const user = require("./controllers/users");

	app.get("/", user.index);
	app.post("/filter-by-name", user.filter_name_ajax);

	// APP.get("/register-and-login", user.register);
};
