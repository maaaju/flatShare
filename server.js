import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'


import {
  Card,
  Comment,
  Expense,
  Flat,
  Settlement,
  User,
  } from './models'

// creating instances
const app = express()
const router = express.Router()

// choosing the port to use, if no is defined, then 3001
const port = process.env.API_PORT || 3001

// db config
mongoose.connect(NODE_ENV.MONGO)
// now we should configure the API to use bodyParser and look for
// JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// To prevent errors from Cross Origin Resource Sharing, we will set
// our headers to allow CORS with middleware like so:
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Methods, Access-Control-Request-Headers')
  // removin caching:
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

// set route path and initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'API initialized' })
})

router.route('/flatboard')
  .post((req, res) => {
    const user = new User()
    user.userName = req.body.userName
    user.mail = req.body.mail
    user.password = req.body.password // TODO: Lets add some salt and stuff
    user.balance = req.body.balance
    user.expense = req.body.expense
    user.save((err) => {
      res.send(err)
    })
    res.json({ message: 'User Added!' })
  })
  .get((req, res) => {
    User.find((err, user) => {
      if (err) {
        res.send(err)
      }
      res.json(user)
    })
    // Card.find((err, card) => {
    //   if (err) {
    //     res.send(err)
    //   }
    //   res.json(card)
    // })
  })
  // .post((req, res) => {
  //   const contract = new Contract()
  //   contract.name = req.body.name
  //   contract.type = req.body.type
  //   contract.duration = req.body.duration
  //   contract.initialALDays = req.body.initialALDays
  //   contract.workPlace = req.body.workPlace
  //   contract.save((err) => {
  //     if (err) {
  //       res.send(err)
  //     }
  //     res.json({ message: "Contract Added!"})
  //   })
  // })

// router.route('/employees')
//   .get((req, res) => {
//     Employee.find((err, employees) => {
//       if (err) {
//         res.send(err)
//       }
//       res.json(employees)
//     })
//   })
//   .post((req, res) => {
//     const employee = new Employee()
//     employee.name = req.body.name
//     employee.contractType = req.body.contractType
//     employee.currentALDays = req.body.currentALDays
//     employee.currentSLDays = 0
//     employee.type = req.body.type
//     employee.team = req.body.team
//     employee.save((err) => {
//       if (err) {
//         res.send(err)
//       }
//       res.json({ message: 'Employee Added!' })
//     })
//   })
//
// router.route('/teams')
//   .get((req, res) => {
//     Team.find((err, team) => {
//       if (err) {
//         res.send(err)
//       }
//       res.json(team)
//     })
//   })
//   .post((req, res) => {
//     const team = new Team()
//     team.name = req.body.name
//     team.supervisor = req.body.supervisor
//     team.description = req.body.description
//     team.save((err) => {
//       if (err) {
//         res.send(err)
//       }
//       res.json({ message: 'Team Added!' })
//     })
//   })
//adding /comments route to our api router
// router.route('/comments')
// // retrieve the comments from the db
//   .get(function (req, res) {
//     //Looks at the model/comments.js schema
//     Comment.find(function(err, comments) {
//       if (err)
//       res.send(err);
//       res.json(comments)
//     });
//   })
//
//   .post(function (req, res) {
//     const comment = new Comment()
//     comment.author = req.body.author
//     comment.text = req.body.text
//     comment.save((err) => {
//       if (err) {
//         res.send(err)
//       }
//       res.json({ message: 'Comments added!2' })
//     })
//   })
//
// router.route('/comments/:comment_id')
// //Adding a route to a specific comment based on the db id passed to the route
// //Updating the comment text or comment author
//   .put((req, res) => {
//     Comment.findById(req.params.comment_id, (err, comment) => {
//       if (err) {
//         res.send(err)
//       }
//       //setting the new author and text to whatever was changed. If
//       //nothing was changed we will not alter the field.
//       (req.body.author) ? comment.author = req.body.author : console.log('no author');
//       (req.body.text) ? comment.text = req.body.text : console.log('no text');
//
//       //save comment
//       comment.save(function(err) {
//         if (err) {
//           res.send(err)
//         }
//         res.json({ message: 'Comment has been updated' });
//      });
//     });
//   })
// //Deleting a comment:
//   .delete(function(req, res){
//     Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
//       if (err) {
//         res.send(err)
//       }
//       res.json({ message: 'Comment has been deleted'})
//     })
//   });
// Use our router config when we call /API
app.use('/api', router)

// starts server and listens for requests
app.listen(port, () => {
  console.log(`API running on port ${port}`)
})
