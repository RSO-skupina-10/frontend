var express = require("express");
var router = express.Router();

const ctrlRegister = require("../controllers/register");
const ctrlLogin = require("../controllers/login");
const ctrlRestaurant = require("../controllers/restaurants");

/* GET and POST register */
router.get("/", ctrlRegister.init);
router.post("/register", ctrlRegister.register);

/* GET and POST login */
router.get("/login", ctrlLogin.init);
router.post("/login", ctrlLogin.login);

/* GET restaurants */
router.get("/restaurants", ctrlRestaurant.init);
router.get("/restaurants/:idRestaurant", ctrlRestaurant.meals);

/* POST order */

module.exports = router;
