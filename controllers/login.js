var apiParams = {
    // server: "http://20.124.146.131/",
    server: "http://localhost:8084",
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
    const params = new URLSearchParams([
        ["username", req.body["username"]],
        ["password", req.body["password"]],
    ]);

    axios
        // .get("/v1/auth", {
        //     params: {
        //         username: req.body["username"],
        //         password: req.body["pasword"],
        //     },
        // })
        .get("/v1/auth", { params })
        .then((response) => {
            console.log(response);
        });
    // res.render("restaurants", {
    //     title: "DeliveryApp",
    // });
};

module.exports = {
    init,
    login,
};
