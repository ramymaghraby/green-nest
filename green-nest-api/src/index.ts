import {ApplicationConfig} from '@loopback/core';
import {GreenNestApiApplication} from './application';

export {GreenNestApiApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new GreenNestApiApplication(options);
  await app.boot();
  await app.migrateSchema();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
