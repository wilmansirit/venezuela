'use strict'

const Estado = require('../models').Estado

module.exports = {

	index		: 		async (req, res) => {

							let data = await Estado.findAll()
							res.render('index', {estados : data});

						}


}
