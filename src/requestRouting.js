var express = require('express')
var router = express.Router()
const path = require('path')

var maindom = path.join(__dirname,'/views/index.html')
var recurso1 = path.join(__dirname,'/server/database/data1.json')




router.get('/', function(req, res) {
  res.sendFile(maindom)
})


router.get('/src/server/database', function(req, res) {

  res.sendFile(recurso1)
})

module.exports = router
