import 'dotenv/config';
import { connectDB } from './src/config/connect.js';
import fastify from 'fastify';
import { PORT } from './src/config/config.js';
import fastifySocketIO from 'fastify-socket.io';
import { registerRoutes } from './src/routes/index.js';
import { buildAdminRouter } from './src/config/setup.js';
import fastifyStatic from '@fastify/static';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// ES module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  const app = fastify();

  app.register(fastifySocketIO, {
    cors: { origin: '*' },
    pingInterval: 10000,
    pingTimeout: 5000,
    transports: ['websocket'],
  });

  // ✅ Serve AdminJS frontend files properly
  app.register(fastifyStatic, {
    root: join(__dirname, 'node_modules', 'adminjs', 'frontend', 'bundle'),
    prefix: '/admin/frontend/',
  });

  await registerRoutes(app);

  const adminJs = await buildAdminRouter(app);

  app.listen({ port: PORT, host: '0.0.0.0' }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(` Grocery app is running on http://localhost:${PORT}${adminJs.options.rootPath}`);
    }
  });

  app.ready().then(() => {
    app.io.on('connection', (socket) => {
      console.log('A user connected');

      socket.on('joinRoom', (orderId) => {
        socket.join(orderId);
        console.log(`User joined room: ${orderId}`);
      });

      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  });
};

start();
