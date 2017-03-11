
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Card = require('./models/card')
const User = require('./models/user')


const app = express()
const router = express.Router()

const port = process.env.API_PORT || 3001

mongoose.connect('mongodb://airbookingadmin:airbooking@ds111489.mlab.com:11489/airbooking')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Methods, Access-Control-Request-Headers')
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

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
  })
router.route('/flatboard/cards')
  .get((req, res) => {
    Card.find((err, card) =>{
      if (err) {
        res.send(err)
      }
      res.json(card)
    })
  })


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

app.listen(port, () => {
  console.log(`API running on port ${port}`)
})
