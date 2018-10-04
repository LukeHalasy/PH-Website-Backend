// import * as express from 'express';
// import * as cookieParser from 'cookie-parser';
// import * as http from 'http';
// import * as logger from 'morgan';
// import * as mongoose from 'mongoose';
// import * as passport from 'passport';
// import * as cors from 'cors';
// import * as helmet from 'helmet';
// import * as yes from 'yes-https';
// import { join, resolve } from 'path';
// import CONFIG from './config';
// import passportMiddleWare, { extractUser } from './middleware/passport';
// import { router as auth } from './routes/auth';
// import { router as home } from './routes/home';
// import { router as members } from './routes/members';
// import { router as events } from './routes/events';
// import { router as jobs } from './routes/jobs';
// import { router as locations } from './routes/locations';
// import { router as credentials } from './routes/credentials';
// import { router as permissions } from './routes/permissions';
// import { router as autocomplete } from './routes/autocomplete';

// export const app = express();
// export const server = http.createServer(app);
// const { NODE_ENV, PORT, DB } = CONFIG;

// mongoose.connect(
// 	DB,
// 	{ useNewUrlParser: true },
// 	err =>
// 		err
// 			? console.error('Error connecting to mongo:', err)
// 			: console.log('Connected to mongo:', DB)
// );

// app.use(helmet());
// if (NODE_ENV === 'production') app.use(yes());

// passportMiddleWare(passport);

// NODE_ENV !== 'production' ? app.use(logger('dev')) : app.use(logger('tiny'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(passport.initialize());
// app.use(cors());
// app.use(extractUser());

// app.use('/api', home);
// app.use('/api/auth', auth);
// app.use('/api/members', members);
// app.use('/api/events', events);
// app.use('/api/jobs', jobs);
// app.use('/api/locations', locations);
// app.use('/api/credentials', credentials);
// app.use('/api/permissions', permissions);
// app.use('/api/autocomplete', autocomplete);

// // Serves react app, only used in production
// app.use(express.static(join(__dirname, '../frontend/build')));
// app.get('*', (req, res) =>
// 	res.sendFile(resolve(__dirname, '../frontend/build/index.html'))
// );

// server.listen(
// 	PORT,
// 	() => console.log('CONFIG:', CONFIG, `\nListening on port: ${PORT}`)
// 	// console.log(`Listening on port: ${PORT}`)
// );

import Server from './server';
import CONFIG from './config';
const { PORT, DB } = CONFIG;

const start = async () => {
	const server = await Server.createInstance();
	server.app.listen(PORT, () =>
		console.log('CONFIG: ', CONFIG, `\nListening on port: ${PORT}`)
	);
	return server;
};

start();
