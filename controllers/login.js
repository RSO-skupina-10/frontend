const init = (req, res) => {
    res.render("login", {
        title: "DeliveryApp",
    });
};

const login = (req, res) => {
    res.render("mainPerson", {
        title: "DeliveryApp",
    });
};

module.exports = {
    init,
    login,
};
