const { addKeyword } = require('@bot-whatsapp/bot');
const informacionFlow = require('./informacion.flow');

module.exports = addKeyword(
	['informacion', '1', 'Informacion', 'Información', 'Info'],
	{
		sensitive: true,
	}
).addAction(async (_, { state, flowDynamic }) => {
	const currentState = state.getMyState();
	console.log('state', currentState);
	return flowDynamic(
		`Veo que solicitaste informacion acerca de nuestro servicio, paso a comentarte!\n Este es un bot de whasapp que responde automaticamente los mensajes entrantes con informacion preestablecida. Esta informacion puede ser estática o dinámica cargada via base de datos.\n De esta manera, dependiendo de las necesidades de tu negocio podes tener, por ejemplo, una lista de servicios que no cambie nunca para que tus clientes puedan acceder a los detalles de estos o tener una base de datos con informacion cambiante, para detalles y requerimientos de departamentos en alquiler por ejemplo, y que tus clientes puedan acceder a esa informacion sin que vos tengas que intervenir.`
	);
});
