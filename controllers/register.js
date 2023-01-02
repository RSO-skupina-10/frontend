/* GET home page */
const init = (req, res) => {
    res.render("index", { title: "DeliveryApp" });
};

const register = (req, res) => {
    res.redirect("/restaurants");
};

module.exports = {
    init,
    register,
};
