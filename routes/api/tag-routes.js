const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: Product
  }).then(tag => {
    res.json(tag)
  })
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: Product
  }).then(tg => {
    res.send(tg)
  })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  const new_tag_data = req.body;
  Tag.create(new_tag_data)
    .then(new_tag => {
      res.send(new_tag)
    })
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(ta => {
    res.send(ta)
  })
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy(req.body, {
    where: {
      id: req.params.id
    }
  }).then(tgs => {
    res.send(tgs)
  })
  // delete on tag by its `id` value
});

module.exports = router;
