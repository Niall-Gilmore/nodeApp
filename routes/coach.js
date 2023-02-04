var express = require('express');
var router = express.Router();
const mysql_connector = require('mysql');

const connection = mysql_connector.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'personal_training_app',
})

// add a new user
router.post('/add', function(req, res, next) {    
    console.log("In the api")
    let data = req.body

    let firstName = data.firstName;
    let lastName = data.lastName;
    let email = data.email;
    let password = data.password;
    let id = 4;
    let errors = false;
    let maxID = 0

    // if no error
    if(!errors) {

        var form_data = {
        coach_firstname:firstName ,
        coach_surname:lastName,
        coach_email:email ,
        coach_password:password ,
        admin: 1
        }
        console.log("INSQL part")
        // insert query
        connection.connect();
        // connection.query('SELECT  MAX(coach_id) id FROM coach', function(err, result) {
        //     //if(err) throw err
        //     if (err) {
        //         console.log('error', err)
                             
        //     } else {                
        //      maxID = result +1
        //      console.log(maxID,"Is the max ID")
        //     }
        // })
        // console.log(maxID)
        // form_data.coach_id =maxID

        connection.query('INSERT INTO coach SET ?', form_data, function(err, result) {
            //if(err) throw err
            if (err) {
                console.log('error', err)
            } 
        })
        connection.end();
    }
})

// // display edit user page
// router.get('/edit/(:id)', function(req, res, next) {

//     let id = req.params.id;
   
//     dbConn.query('SELECT * FROM users WHERE id = ' + id, function(err, rows, fields) {
//         if(err) throw err
         
//         // if user not found
//         if (rows.length <= 0) {
//             req.flash('error', 'User not found with id = ' + id)
//             res.redirect('/users')
//         }
//         // if user found
//         else {
//             // render to edit.ejs
//             res.render('users/edit', {
//                 title: 'Edit User', 
//                 id: rows[0].id,
//                 name: rows[0].name,
//                 email: rows[0].email,
//                 position: rows[0].position
//             })
//         }
//     })
// })

// // update user data
// router.post('/update/:id', function(req, res, next) {

//     let id = req.params.id;
//     let name = req.body.name;
//     let email = req.body.email;
//     let position = req.body.position;
//     let errors = false;

//     if(name.length === 0 || email.length === 0 || position.length === 0) {
//         errors = true;
        
//         // set flash message
//         req.flash('error', "Please enter name and email and position");
//         // render to add.ejs with flash message
//         res.render('users/edit', {
//             id: req.params.id,
//             name: name,
//             email: email,
//             position:position
//         })
//     }

//     // if no error
//     if( !errors ) {   
 
//         var form_data = {
//             name: name,
//             email: email,
//             position:position
//         }
//         // update query
//         dbConn.query('UPDATE users SET ? WHERE id = ' + id, form_data, function(err, result) {
//             //if(err) throw err
//             if (err) {
//                 // set flash message
//                 req.flash('error', err)
//                 // render to edit.ejs
//                 res.render('users/edit', {
//                     id: req.params.id,
//                     name: form_data.name,
//                     email: form_data.email,
//                     position: form_data.position
//                 })
//             } else {
//                 req.flash('success', 'User successfully updated');
//                 res.redirect('/users');
//             }
//         })
//     }
// })
   
// // delete user
// router.get('/delete/(:id)', function(req, res, next) {

//     let id = req.params.id;
     
//     dbConn.query('DELETE FROM users WHERE id = ' + id, function(err, result) {
//         //if(err) throw err
//         if (err) {
//             // set flash message
//             req.flash('error', err)
//             // redirect to user page
//             res.redirect('/users')
//         } else {
//             // set flash message
//             req.flash('success', 'User successfully deleted! ID = ' + id)
//             // redirect to user page
//             res.redirect('/users')
//         }
//     })
// })

module.exports = router;