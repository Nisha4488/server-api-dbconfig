const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('books').then(books=>res.json(books))
});

router.get('/:id', function(req,res,next){
  knex('books').where('id',req.params.id).then(books=>res.json(books))
})

router.post('/', function(req,res){
  knex('books').insert(req.body, '*').then(newBook=>res.json(newBook))
})

router.patch('/:id', function(req,res){
  knex('books').where('id',req.params.id).update(req.body, '*').then(updatedBook=>res.json(updatedBook))
})

router.delete('/:id', function(req,res){
  knex('books').where('id',req.params.id).del().then(removedBook=>res.json(removedBook))
})
module.exports = router;
