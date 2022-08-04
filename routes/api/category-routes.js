const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: Product
  })
    .then(category => {
      res.send(category)
    })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne(req.params.id, {
    include: Product
  }).then(categor => {
    res.send(categor)
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  const new_catergory_data = req.body;
  Category.create(new_catergory_data)
    .then(new_catergory => {
      res.send(new_catergory)
    })
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  }).then(cater => {
    res.send(cater)
  })
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy(req.body, {
    where: {
      id: req.params.id
    }
  }).then(cat => {
    res.send(cat)
  })
  // delete a category by its `id` value
});

module.exports = router;
