const init = (req, res) => {
    res.render("login", {
        title: "DeliveryApp",
    });
};

const login = (req, res) => {
    res.render("restaurants", {
        title: "DeliveryApp",
    });
};

module.exports = {
    init,
    login,
};
