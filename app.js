require('dotenv').config();
const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot');

const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

const welcomeFlow = require('./flows/welcome.flow');
const informacionFlow = require('./flows/informacion.flow');
const detallesFlow = require('./flows/detalles.flow');
const mainFlow = require('./flows/main.flow');
const ServerAPI = require('./http');

const main = async () => {
	const adapterDB = new MockAdapter();
	const adapterFlow = createFlow([
		welcomeFlow,
		informacionFlow,
		detallesFlow,
		mainFlow,
	]);

	const adapterProvider = createProvider(BaileysProvider);

	const httpServer = new ServerAPI(adapterProvider, adapterDB);

	const configBot = {
		flow: adapterFlow,
		provider: adapterProvider,
		database: adapterDB,
	};

	await createBot(configBot);
	httpServer.start();
};

main();
