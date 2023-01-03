const init = (req, res) => {
    res.render("orders", { title: "DeliveryApp" });
};

const createOrder = (req, res) => {
    order = req["body"];
    res.redirect("/restaurants");
};

const specificOrder = (req, res) => {
    orderId = req["params"]["idOrder"];
    res.render("order", { title: "DeliveryApp" });
};

module.exports = {
    init,
    createOrder,
    specificOrder,
};
