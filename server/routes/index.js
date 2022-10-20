
// Name: Alakh Patel
// Student ID: 301232383
// Date: 30th Sept


var express = require("express");
var router = express.Router();
let indexController = require('../controllers/index');
/* GET home page. */
// router.get("/", function (req, res, next) {

//   res.render("home", { title: "Express" });
// });
// // router.get("/busContact", function (req, res, next) {

// //   res.render("crud/busContact", { title: "Business Contacts" });
// // });
// router.get("/home", function (req, res, next) {
//   res.render("home", { title: "Alakh Patel - Home" });
// });
// // router.get("/add", function (req, res, next) {
// //   res.render("crud/add", { title: "Alakh Patel - Home" });
// // });

// router.get("/contactme", function (req, res, next) {
//   res.render("contactme", { title: "Alakh Patel - Contact" });
// });

// router.get("/aboutme", function (req, res, next) {
//   res.render("aboutme", { title: "Alakh Patel - About Me" });
// });

// router.get("/projects", function (req, res, next) {
//   res.render("projects", { title: "Alakh Patel - Projects" });
// });
// router.get("/services", function (req, res, next) {
//   res.render("services", { title: "Alakh Patel -Services" });
// });

/// Extra 


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/aboutme', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contactme', indexController.displayContactPage);
router.get('/busContact', indexController.displayBusPage);
///Extra Ends
// Displaying Login Page
router.get('/logins', indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post('/logins', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);
module.exports = router;
