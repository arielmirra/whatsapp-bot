const { EVENTS, addAction, addKeyword } = require('@bot-whatsapp/bot');

// const { addKeyword } = require('@bot-whatsapp/bot');
const arielPhone = '5491122627275';
let currentPhone = '';

module.exports = addKeyword(EVENTS.ACTION)
	.addAnswer(
		'Perfecto! dejanos tus detalles y uno de nuestros especialistas se pondrá en contacto con vos! \n Para empezar decime tu nombre:',
		{
			capture: true,
		},
		async (ctx, { flowDynamic, state }) => {
			await state.update({ name: ctx.body });
		}
	)
	.addAnswer(
		'Y tu e-mail?',
		{
			capture: true,
		},
		async (ctx, { flowDynamic, state }) => {
			await state.update({ email: ctx.body });
		}
	)
	.addAnswer(null, async (_, { flowDynamic, state }) => {
		const myState = state.getMyState();
		flowDynamic(
			`Genial ${myState.name}! Ya estas en nuestra lista de contacto y en breve seras contactado. Saludos!`
		);
	})
	.addAction(async (ctx, { provider, state }) => {
		const currentUserData = state.getMyState();
		console.log('sending text ', currentUserData.email);
		await provider.sendText(
			`${arielPhone}@s.whatsapp.net`,
			`Hola Ariel, ${currentUserData.name} te esta preguntando por asesoria en implementacion del bot. Su mail es ${currentUserData.email} y su celu ${currentPhone}`
		);
	});
