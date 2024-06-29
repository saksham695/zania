// src/setupTests.js
import { worker } from './mocks';

// Start the mocking when the application is running in development mode.
// if (process.env.NODE_ENV === 'development') {
  worker.start();
// }