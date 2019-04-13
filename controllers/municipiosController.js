'use strict'

const Municipio = require('../models').Municipio

module.exports = {

	index		: 		async (req, res) => {

							let data = await Municipio.findAll()							
							console.log( data );							

						}


}
