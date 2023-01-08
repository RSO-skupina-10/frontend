var apiParams = {
    server: "http://20.124.146.131",
    // server: "http://localhost:8081",
    // serverRestaurants: "http://localhost:8080",
    // serverCustomer: "http://localhost:8084",
    // serverWeather: "http://localhost:8082",
};

const axios = require("axios").create({
    baseURL: apiParams.server,
    timeout: 5000,
});

const axiosRestaurants = require("axios").create({
    // baseURL: apiParams.serverRestaurants,
    baseURL: apiParams.server,
    timeout: 5000,
});

const axiosCustomer = require("axios").create({
    // baseURL: apiParams.serverCustomer,
    baseURL: apiParams.server,
    timeout: 5000,
});

const axiosWeather = require("axios").create({
    // baseURL: apiParams.serverWeather,
    baseURL: apiParams.server,
    timeout: 5000,
});

const init = async (req, res) => {
    const allOrders = await getAllOrders();
    const activeOrders = allOrders.data.filter((el) => el.orderStatus == 0);

    const output = [];
    for (i = 0; i < activeOrders.length; i++) {
        var currRestaurant = await getRestaurantDetails(
            activeOrders[i].orderRestaurantId
        );
        var currCustomer = await getCustomerDetails(
            activeOrders[i].orderPersonId
        );
        var currWeatherBonus = await getWeatherBonus(
            currCustomer.data["lat"],
            currCustomer.data["lng"]
        );

        output.push({
            order: activeOrders[i],
            restaurant: currRestaurant.data,
            customer: currCustomer.data,
            weatherBonus: currWeatherBonus.data,
        });
    }

    res.render("orders", {
        title: "DeliveryApp",
        orders: output,
    });
};

const createOrder = (req, res) => {
    axios
        // .post("/v1/orders", {
        .post("/order-catalog/v1/orders", {
            status: req.body["status"],
            restaurantId: req.body["restaurantId"],
            personId: req.body["personId"],
        })
        .then((response) => {
            res.redirect("/restaurants");
        });
};

const specificOrder = async (req, res) => {
    const orderId = req["params"]["idOrder"];

    const order = await getSpecificOrder(orderId);
    const restaurant = await getRestaurantDetails(order.data.orderRestaurantId);
    const customer = await getCustomerDetails(order.data.orderPersonId);
    const weatherBonus = await getWeatherBonus(
        customer.data["lat"],
        customer.data["lng"]
    );

    res.render("order", {
        title: "DeliveryApp",
        order: order.data,
        restaurant: restaurant.data,
        customer: customer.data,
        weatherBonus: weatherBonus.data,
        restaurantData: JSON.stringify(restaurant.data),
        customerData: JSON.stringify(customer.data),
    });
};

async function getAllOrders() {
    return axios.get("/order-catalog/v1/orders");
    // return axios.get("/v1/orders");
}

async function getSpecificOrder(id) {
    return axios.get("/order-catalog/v1/orders/" + id);
    // return axios.get("/v1/orders/" + id);
}

async function getRestaurantDetails(restaurantId) {
    return axiosRestaurants.get(
        "/restaurant-catalog/v1/restaurants/" + restaurantId
    );
    // return axiosRestaurants.get("/v1/restaurants/" + restaurantId);
}

async function getCustomerDetails(personId) {
    return axiosCustomer.get("/auth-service/v1/auth/" + personId);
    // return axiosCustomer.get("/v1/auth/" + personId);
}

async function getWeatherBonus(lat, lng) {
    const params = lat + "," + lng;
    return axiosWeather.get("/weather-service/v1/weather/" + params);
    // return axiosWeather.get("/v1/weather/" + params);
}

module.exports = {
    init,
    createOrder,
    specificOrder,
};
