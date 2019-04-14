'use strict'

const 	Parroquia 	= 	require('../models').Parroquia
	,	Municipio	=	require('../models').Municipio
	,	Ciudad		=	require('../models').Ciudad
	,	Estado		=	require('../models').Estado

module.exports = {

	index		:		async (req, res, next) => {
							let data = await Parroquia.findAll({
								include	:	[Municipio]
							});
							
							res.render('parroquias', {parroquias: data})

						}

}