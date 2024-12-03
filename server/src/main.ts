import { createServer } from 'http';
import express from 'express';
import cors from 'cors';

import logger from 'utils/logger';
import { getBind } from 'bind';

import { connect as connectMongoDB } from 'db/connect';
import { cyan, green, red, yellow } from 'colorette';
import { appEnv } from 'config/app-env';
import { createRootRouter } from 'routes';
import { ApplicationError } from 'experimental/errors';

function createApp() {
  const app = express();

  app.disable('etag');
  app.get('/*', function (req, res, next) {
    res.setHeader('Last-Modified', new Date().toUTCString());
    next();
  });

  app.use(cors());
  app.use(express.json());

  app.use(createRootRouter());

  // Handle 404 for undefined routes (after all routes are mounted)
  app.use((req, res) => {
    logger.warn(`404 - Not Found - ${req.originalUrl}`);
    res.status(404).json({ message: 'Route not found' });
  });

  // Global error handling middleware
  app.use(
    (
      err: Error,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ) => {

      if (err instanceof ApplicationError) {
        return res.status(err.statusCode).json({
          error: err.message,
        });
      }

      if (err) {
        logger.error(`500 - Server Error - ${err.message}`);
        res
          .status(500)
          .json({ message: 'An internal server error occurred' });

        throw err;
      }
      next();
    },
  );

  return app;
}

async function bootstrap() {
  await connectMongoDB();

  const app = createApp();
  const server = createServer(app);

  const bind = getBind();

  const listenAt = bind.type === 'port' ? bind.port : bind.pipe;
  server.listen(listenAt);

  server.on('error', (error: { syscall: string; code: string }) => {
    if (error.syscall !== 'listen') {
      throw new Error();
    }

    let bindStr =
      bind.type === 'pipe' ? `Pipe ${listenAt}` : `Port ${listenAt}`;

    bindStr = yellow(bindStr);

    switch (error.code) {
      case 'EACCES':
        logger.error(red(`${bindStr} requires elevated privileges`));
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logger.error(red(`${bindStr} is already in use`));
        process.exit(1);
        break;
      default:
        throw new Error('An error occured ' + JSON.stringify(error));
    }
  });

  server.on('listening', () => {
    const listeningOn =
      bind.type === 'port'
        ? green(`http://localhost:${listenAt}`)
        : `named pipe ${green(listenAt)}`;

    logger.info(cyan(`Listening on ${listeningOn}`));

    const nodeEnv = yellow(appEnv.NODE_ENV);
    logger.info(`env: ${nodeEnv} 🚀`);
  });
}

bootstrap();
