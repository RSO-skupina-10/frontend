var apiParams = {
    server: "http://20.124.146.131",
    // server: "http://localhost:8084",
};

const axios = require("axios").create({
    baseURL: apiParams.server,
    timeout: 5000,
});

const init = (req, res) => {
    res.render("login", {
        title: "DeliveryApp",
    });
};

const login = (req, res) => {
    const params = new URLSearchParams([["username", req.body["username"]]]);

    // axios.get("/v1/auth", { params }).then((response) => {
    axios.get("/auth-service/v1/auth", { params }).then((response) => {
        if (
            response.data.length == 1 &&
            response.data[0]["password"] == req.body["password"]
        ) {
            const role = response.data[0]["role"];
            if (role == 0) {
                res.redirect("/restaurants");
            } else {
                res.redirect("/orders");
            }
        } else {
            res.render("login", {
                title: "DeliveryApp",
                errorExists: true,
                message: "Something went wrong, try again.",
            });
        }
    });
};

module.exports = {
    init,
    login,
};
