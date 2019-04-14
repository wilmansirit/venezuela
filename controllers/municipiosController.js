'use strict'

const 	Municipio 	= 	require('../models').Municipio,
		Estado		=	require('../models').Estado,
		Ciudad		=	require('../models').Ciudad

		
module.exports = {

	index		: 		async (req, res) => {

							let data = await Municipio.findAll({
								include	:	[Estado, Ciudad]
							});	

							res.render('municipios', {municipios: data})						

						}


}
