const init = (req, res) => {
    res.render("restaurants", { title: "DeliveryApp" });
};

const meals = (req, res) => {
    res.render("meals", { title: "DeliveryApp" });
};

module.exports = {
    init,
    meals,
};
