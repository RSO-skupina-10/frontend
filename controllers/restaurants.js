var apiParams = {
    server: "http://20.124.146.131",
    // server: "http://localhost:8080",
};

const axios = require("axios").create({
    baseURL: apiParams.server,
    timeout: 5000,
});

const init = (req, res) => {
    axios.get("/restaurant-catalog/v1/restaurants").then((response) => {
        // axios.get("/v1/restaurants").then((response) => {
        res.render("restaurants", {
            title: "DeliveryApp",
            restaurants: response.data,
            restaurantsData: JSON.stringify(response.data),
        });
    });
};

const meals = (req, res) => {
    axios
        // .get("/v1/restaurants/" + req.params["idRestaurant"])
        .get("/restaurant-catalog/v1/restaurants/" + req.params["idRestaurant"])
        .then((response) => {
            res.render("meals", {
                title: "DeliveryApp",
                meals: response.data["listOfMealDtos"],
                restaurant: response.data,
            });
        });
};

module.exports = {
    init,
    meals,
};
