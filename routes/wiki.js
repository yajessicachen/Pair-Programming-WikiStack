const express = require("express");
const res = require("express/lib/response");
const router = express.Router()
const {addPage} = require('../views')
const {Page} = require('../models')


// function slug(title){
//   return title.replace(/\s+/g, '_').replace(/\W/g, '');
// }

router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/')
});

router.post('/', async(req, res, next) =>{
  const name = req.body.name
  const email = req.body.email
  const title = req.body.title
  const content = req.body.content
  const status = req.body.status
  try {
    const page = await Page.create({
      title: title,
      content: content

    });
    res.redirect('/');
  } catch (error) {
    next(error) }
});
router.get('/add', (req, res, next) =>{
  res.send(addPage())
});

router.get('/:slug', async(req, res, next) => {
  res.send(`hit dynamic route at ${req.params.slug}`);
  try{


  } catch (err){
    next(err)
  }
});







// console.log(slug('hello 2 jf934+3@ @'))


module.exports = router
