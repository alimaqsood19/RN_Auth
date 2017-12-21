const admin = require('firebase-admin');

module.exports = function(req, res) {
  //Verify user has provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }
  //Format phone number to remove dashes and parenthesis or spaces, just raw number digits
  const phone = String(req.body.phone).replace(/[^\d]/g, '');

  //Create a new user account using phone number
  admin
    .auth()
    .createUser({ uid: phone })
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(422).send({ error: err });
    }); //async request, takes some time to reach FB datastore so we use a promise handler

  //Respond to user request, saying account was made
};
