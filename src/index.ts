import config from './utils/config.util';
import getServer from './server';

(async () => {
  const server = await getServer();
  server.listen(config.port, config.ip, () => {
    console.log(`Server is listenning on port ${config.port} and on ip ${config.ip}`);
  });
})();
