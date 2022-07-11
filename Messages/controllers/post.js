const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Post = require('../models/post');

exports.postMessage = (req, res, next) => {
  //delete postObject._id;
  const post = new Post({
      titre: req.body.titre,
      message: req.body.message
  });
  post.save()
    .then(() => res.status(201).json({ message: "Post enregistré"}))
    .catch(error => res.status(400).json({ error }));
};
