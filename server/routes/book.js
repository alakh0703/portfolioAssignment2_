// let express = require('express');

// let router = express.Router();
// let mongoose = require('mongoose');
// // want to connect to our book model
// let Contact = require('../models/books');
// //GET the route for the book list page - read operation 

// router.get('/', (req, res, next) => {

//     Contact.find((err, contactList) => {
//         if (err) {
//             return console.error(err);
//         }
//         else {
//             //     contactList = contactList.sort();
//             contactList.sort(function (a, b) {
//                 if (a.name < b.name) {
//                     return -1;
//                 }
//                 if (a.name > b.name) {
//                     return 1;
//                 }
//                 return 0;
//             });



//             //  console.log(contactList);
//             res.render('crud/busContact', { title: 'Contact List', ContactList: contactList });
//         }
//     });
// });

// // // get ROUTE FOR displaying the add page - create operation 
// router.get('/add', (req, res, next) => {
//     console.log("Logeedoutgiugb")
//     res.render("crud/add.ejs", { title: 'Add Book' });
// });
// // post route for processing the add page - create operation
// router.post('/add', (req, res, next) => {
//     console.log("entered")
//     let newContact = Contact({
//         "name": req.body.name,
//         "number": req.body.number,
//         "email": req.body.email
//     });
//     Contact.create(newContact, (err, Contact) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         }
//         else {
//             console.log("entered")
//             res.redirect('/busContact');
//         }
//     });
// });
// // // get route for displaying the edit page - update operation 
// router.get('/edit/:id', (req, res, next) => {
//     let id = req.params.id;
//     Contact.findById(id, (err, contactToEdit) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         }
//         else {
//             res.render('crud/edit', { title: 'Edit Book', contact: contactToEdit });
//         }
//     });
// });
// // // post routre for processing the edit page - update operation 
// router.post('/edit/:id', (req, res, next) => {
//     let id = req.params.id;
//     let updatedContact = Contact({
//         "_id": id,
//         "name": req.body.name,
//         "number": req.body.number,
//         "email": req.body.email

//     });
//     Contact.updateOne({ _id: id }, updatedContact, (err) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         }
//         else {
//             res.redirect('/busContact');
//         }
//     });
// });
// // // get route to perform deletion - delete operation
// router.get('/delete/:id', (req, res, next) => {
//     let id = req.params.id;
//     Contact.remove({ _id: id }, (err) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         }
//         else {
//             res.redirect('/busContact');
//         }
//     });
// });

// module.exports = router;


// **********************************************************************************************************

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let bookController = require('../controllers/book');

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/logins');
    }
    next();
}

/* GET Route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, bookController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, bookController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;