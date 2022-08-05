const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: Product
  }).then(tag => {
    res.json(tag)
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: Product
  }).then(tg => {
    res.json(tg)
  })
});
// create a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(new_tag => {
      res.json(new_tag)
    })
});
// update a tag's name 
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(ta => {
    res.json(ta)
  })
});
// delete on tag 
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(tgs => {
    res.json(tgs)
  })
});

module.exports = router;
