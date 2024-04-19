const { addKeyword, EVENTS, sendMessage } = require('@bot-whatsapp/bot');
const detallesFlow = require('./detalles.flow');
const informacionFlow = require('./informacion.flow');
console.log('E', EVENTS);
module.exports = addKeyword(EVENTS.WELCOME).addAction(async (ctx, ctxFn) => {
	// Respond with a message asking if the user needs further assistance
	await ctxFn.flowDynamic(
		'¿Te puedo ayudar con algo más?\n1 - Información\n2 - Detalles'
	);

	// Listen for user's response
	const userInput = ctx.message.body.toLowerCase().trim();
	if (
		userInput === '1' ||
		userInput === 'información' ||
		userInput === 'info'
	) {
		// Trigger informacionFlow if user selects "Información"
		await informacionFlow(ctx, ctxFn);
	} else if (userInput === '2' || userInput === 'detalles') {
		// Trigger detallesFlow if user selects "Detalles"
		await detallesFlow(ctx, ctxFn);
	}
});
