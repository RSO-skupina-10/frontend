var express = require("express");
var router = express.Router();

const ctrlRegister = require("../controllers/register");
const ctrlLogin = require("../controllers/login");
const ctrlMainPerson = require("../controllers/mainPerson");

/* GET register */
router.get("/", ctrlRegister.init);
router.post("/register", ctrlRegister.register);

/* GET login */
router.get("/login", ctrlLogin.init);
router.post("/login", ctrlLogin.login);

/* GET mainPerson */
router.get("/mainPerson", ctrlMainPerson.init);

module.exports = router;
