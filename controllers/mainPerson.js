/* GET home page */
const init = (req, res) => {
    res.render("mainPerson", { title: "DeliveryApp" });
};

module.exports = {
    init,
};
