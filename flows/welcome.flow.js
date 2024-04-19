// const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
// /**
//  * Punto de Entrada!
//  * NO Inteligente (no usa intelgencia artificial)
//  * Flujo de bienvenida
//  */
// module.exports = addKeyword(EVENTS.WELCOME).addAction(async (ctx, ctxFn) => {
//   const {state} = ctxFn
//   const mensajeEntrante = ctx.body //buenas me interesa el curso de nodejs
//   const pluginAi = ctxFn.extensions.employeesAddon

//   const empleadoIdeal = await pluginAi.determine(mensajeEntrante)

//   if(!empleadoIdeal?.employee){
//     return ctxFn.flowDynamic('Ups lo siento no te entiendo ¿Como puedo ayudarte?')
//   }
//   state.update({answer:empleadoIdeal.answer})
//   pluginAi.gotoFlow(empleadoIdeal.employee, ctxFn)

// })
const { addKeyword, EVENTS, sendMessage } = require('@bot-whatsapp/bot');
const detallesFlow = require('./detalles.flow');
const informacionFlow = require('./informacion.flow');

module.exports = addKeyword(EVENTS.WELCOME).addAction(async (ctx, ctxFn) => {
	// Send welcome message with buttons
	await ctxFn.flowDynamic(
		'¡Hola, bienvenido a nuestro servicio!\nPuedes preguntar lo que quieras pero te dejamos unas opciones:\n1 - Información\n2 - Detalles'
	);
});
