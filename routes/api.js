var express = require('express')
var router = express.Router();

//Models
var Student = require('../models/student')

Student.methods(['get', 'put', 'post', 'delete'])
Student.register(router, '/students')
router.get('/students', function (req, res){
	res.send('Api is working!')
})

module.exports = router;