var apiParams = {
    server: "http://20.124.146.131",
    // server: "http://localhost:8084",
};

const axios = require("axios").create({
    baseURL: apiParams.server,
    timeout: 5000,
});

/* GET home page */
const init = (req, res) => {
    res.render("index", { title: "DeliveryApp" });
};

const register = (req, res) => {
    axios
        // .post("/v1/auth", {
        .post("/auth-service/v1/auth", {
            username: req.body["username"],
            password: req.body["password"],
            role: req.body["role"],
            lat: req.body["lat"],
            lng: req.body["lng"],
        })
        .then((response) => {
            console.log("Successfuly created user");
            if (req.body["role"] == 0) {
                res.redirect("/restaurants");
            } else {
                res.redirect("/orders");
            }
        });
};

module.exports = {
    init,
    register,
};
