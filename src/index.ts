import app from './app';
import config from './config/config';
import logger from './config/logger';

let server: any;

server = app.listen(config.port, () => {
  logger.info(`Server started on   - http://localhost:${config.port}`);
  logger.info(`Swagger Document on - http://localhost:${config.port}/api/v1/docs`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
