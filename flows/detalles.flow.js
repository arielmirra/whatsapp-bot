const { addKeyword, sendMessage } = require('@bot-whatsapp/bot');

const id = 'abcd@s.whatsapp.net'; // Recipient's WhatsApp ID

// Chatbot flow using addKeyword and addAnswer
module.exports = addKeyword(['detalles', '2', 'details'], {
	sensitive: true,
})
	.addAnswer(
		`Para obtener detalles acerca de costos y tiempos de desarrollo de nuestro servicio, puedes comunicarte con uno de nuestros asesores para que te pasen un presupuesto a medida.\n`
	)
	.addAnswer(
		`El número de contacto de nuestro asesor Ariel es: +54 9 1122627275`
	)
	.addAnswer('¡Listo!', async () => {
		await go('main'); // Go back to "main" flow after completion
	});
