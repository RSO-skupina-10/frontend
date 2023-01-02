/* GET home page */
const init = (req, res) => {
    res.render("index", { title: "DeliveryApp" });
};

const register = (req, res) => {
    res.redirect("/mainPerson");
};

module.exports = {
    init,
    register,
};
