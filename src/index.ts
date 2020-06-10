import config from './utils/config.util';
import getServer from './server';

(async () => {
  const server = await getServer();
  server.listen(config.port, () => {
    console.log(`Server is listenning on port ${config.port}`);
  });
})();
