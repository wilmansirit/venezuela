'use strict'

const 	Ciudad 	= 	require('../models').Ciudad
	,	Estado	=	require('../models').Estado

module.exports = {

	index		: 		async (req, res) => {

							let data = await Ciudad.findAll({
							
								include	:	[Estado]
							
							})

							res.render('ciudades', {ciudades : data});

						}


}
