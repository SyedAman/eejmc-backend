//
// API routes
//

// use a router to make use of the server instance in different files outside of index.js
import express from 'express'
const Router = express.Router()

// import models
import User from '../mongoose/models/user'

// define a POST route to create users
Router.post('/users', (request, response) => {
  // create a user using the user model
  const newUser = new User({
    userId: 1,
    firstName: request.body.firstName,
    lastName: request.body.lastName
  })

  // save the new user to the database collection "user"
  newUser.save((error, result) => {
    // handle errors
    if (error) {
      response.send(error)
      console.log(`failed to save user ${newUser.firstName}`, error)
    }

    // send success confirmation
    response.send(result)
    console.log(`successfully saved user ${newUser.firstName} to the database collection`)
  })
})

export default Router
