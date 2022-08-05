const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: Product
  })
    .then(category => {
      console.log(category)
      res.json(category)
    })
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: Product
  }).then(categor => {
    res.json(categor)
  })
});
// create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(new_catergory => {
      res.json(new_catergory)
    })

});
// update a category 
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  }).then(cater => {
    res.json(cater)
  })

});
// delete a category 
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(cat => {
    res.json(cat)
  })

});

module.exports = router;
